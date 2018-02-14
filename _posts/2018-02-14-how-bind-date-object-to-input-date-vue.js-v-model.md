---
layout: single
title: "How to bind a Date object to an input date using vue.js? (v-model doesn't work)"
category: vue.js
tags: [vue.js, javascript]
lang: en-US
comments: true
share: true
mathjax: false
published: true
modified: 2018-02-14
---

To use `v-model` you have to create a custom component (see below). But there is a simpler way.

Considering `myDate` is your property, you can use:

```html
<input type="date" :value="myDate && myDate.toISOString().split('T')[0]"
                   @input="myDate = $event.target.valueAsDate">
```

<!-- more -->

Since `v-model` [is only syntactic sugar to `:value` and `@input`][1], you can use them instead. In this case, we used and changed them a little (to format the `String` that is the output of the date input to a `Date` object and vice-versa).

[Check a **JSFiddle Demo**](https://jsfiddle.net/acdcjunior/r3cjf4x5/3/) of the code below.

```html
<script src="https://unpkg.com/vue"></script>

<div id="app">
  <p>{{ message }}</p>

  <input type="date" :value="myDate && myDate.toISOString().split('T')[0]"
                     @input="myDate = $event.target.valueAsDate">

  <p>
  <code>
  myDate: {{ myDate }}</code>
  </p>

  <button @click="setMyDateToToday">Set date one to today</button>
  <button @click="addADayToMyDate">Add a day to my date</button>
</div>
```

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    myDate: new Date('2011-04-11T10:20:30Z')
  },
  methods: {
    setMyDateToToday() {
      this.myDate = new Date();
    },
    addADayToMyDate() {
      if (this.myDate) // as myDate can be null
        // you have to set the this.myDate again, so vue can detect it changed
        // this is not a caveat of this specific solution, but of any binding of dates
        this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
    },
  }
});
// Notes:
// We use `myDate && myDate.toISOString().split('T')[0]` instead
// of just `myDate.toISOString().split('T')[0]` because `myDate` can be null.

// the date to string conversion myDate.toISOString().split('T')[0] may
// have timezone caveats. See: https://stackoverflow.com/a/29774197/1850609
```

<br><br>

# Creating a custom `input-date` component and using `v-model`

If you want to stick to the `v-model`, you can use the code below. I don't really see any reason why someone would stick to it, but the component below is a useful demonstration of a component that binds to the `value` property of a HTML `input`.

[Check a **JSFiddle Demo**](https://jsfiddle.net/acdcjunior/0Laa8xv7/1/) of the code below.

```html
<script src="https://unpkg.com/vue"></script>

<div id="app">
  myDate: <input-date v-model="myDate"></input-date>
  <p>myDate: {{ myDate }}</p>

  <button @click="setMyDateToToday">Set date one to today</button>
  <button @click="addADayToMyDate">Add a day to my date</button>
</div>
```

```javascript
Vue.component('input-date', {
  template: '\
      <input\
        type="date"\
        ref="input"\
        v-bind:value="dateToYYYYMMDD(value)"\
        v-on:input="updateValue($event.target)"\
        v-on:focus="selectAll"\
      >\
  ',
  props: {
    value: {
      type: Date,
      default: new Date()
    }
  },
  methods: {
    dateToYYYYMMDD(date) {
      // may have timezone caveats https://stackoverflow.com/a/29774197/1850609
      return date && date.toISOString().split('T')[0]
    },
    updateValue: function (target) {
      this.$emit('input', target.valueAsDate);
    },
    selectAll: function (event) {
      // Workaround for Safari bug
      // https://stackoverflow.com/q/1269722/1850609
      setTimeout(function () {
      	event.target.select()
      }, 0)
    }
  }
});

new Vue({
  el: '#app',
  data: {
    myDate: new Date('2011-04-11T10:20:30Z')
  },
  methods: {
    setMyDateToToday() {
    	this.myDate = new Date();
    },
    addADayToMyDate() {
      if (this.myDate) // as myDate can be null
        // you have to set the this.myDate again, so vue can detect it changed
        // this is not a caveat of this specific solution, but of any binding of dates
        this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
    }
  }
});
// Notes:
// We use `myDate && myDate.toISOString().split('T')[0]` instead
// of just `myDate.toISOString().split('T')[0]` because `myDate` can be null.

// the date to string conversion myDate.toISOString().split('T')[0] may
// have timezone caveats. See: https://stackoverflow.com/a/29774197/1850609
```


  [1]: https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
