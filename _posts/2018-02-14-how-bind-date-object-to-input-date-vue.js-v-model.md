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

<div class="beginning-of-content">
<br>
If you really want to use `v-model` you <i>have to</i> create a custom component (see below in the second part of this post).

<br>
But there is also a more direct alternative. Considering `myDate` is your property, you could just use:

<br>
</div>

```html
<input type="date" :value="myDate && new Date(myDate.getTime()-(myDate.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]"
                   @input="myDate = $event.target.valueAsDate">
OR
<input type="date" :value="dateToYYYYMMDD(myDate)"
                   @input="myDate = $event.target.valueAsDate">
    <!-- see code for dateToYYYYMMDD method below -->
```

With `dateToYYYYMMDD()` being

```js
  methods:
    // ...
    dateToYYYYMMDD(d) {
      // alternative implementations in https://stackoverflow.com/q/23593052/1850609
    	return d && new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]
    }
```

Full demo, as well as discussion of this and the component solution below.

<!-- more -->

<br>

# Full breakdown of the solution

Since `v-model` [is only syntactic sugar to `:value` and `@input`][1], you can use these two attributes instead of `v-model`. In this case, we used them because we want to change their behavior a little (to format the `String` that is the output of the date input to a `Date` object and vice-versa).

[Check a **JSFiddle Demo**][jsfiddle-direct] of the code below.

```html
{% raw %}
<script src="//unpkg.com/vue@2.6.11/dist/vue.min.js"></script>

<div id="app">
  <p>
    Formatting the date in the template:
    <input type="date" :value="myDate && new Date(myDate.getTime()-(myDate.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]"
                       @input="myDate = $event.target.valueAsDate">
  </p>
  <p>
    Formatting the date using a helper method:
    <input type="date" :value="dateToYYYYMMDD(myDate)"
                       @input="myDate = $event.target.valueAsDate">
  </p>

  <p>
  <code>
  myDate: {{ myDate }}</code>
  </p>

  <button @click="setMyDateToToday">Set date one to today</button>
  <button @click="addADayToMyDate">Add a day to my date</button>
</div>
{% endraw %}
```

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    myDate: new Date('2011-04-11T00:01:01Z') // DO notice this date is set in UTC (Greenwich time) not your current timezone
  },
  methods: {
    setMyDateToToday() {
    	this.myDate = new Date();
    },
    addADayToMyDate() {
      // use the if because myDate can be null
      if (this.myDate) {
        // notice we don't just call .setDate(...) in myDate, instead
        // we create a new Date object and set it to this.myDate, so vue can detect it changed
        // this is not a caveat of this specific solution, but of any binding of dates
        this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
      }
    },
    dateToYYYYMMDD(d) {
      // alternative implementations in https://stackoverflow.com/q/23593052/1850609
    	return d && new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]
    }
  }
});
// Notes:
// We use `myDate && new Date(myDate.getTime()-(myDate.getT...` instead
// of just `new Date(myDate.getTime()-(myDate.getT...` because `myDate` can be null.
```
Again, the [executable **JSFiddle Demo** is here][jsfiddle-direct].

<br><br>

# Creating a custom `input-date` component and using `v-model`

If you want to stick to the `v-model`, you can use the code below. The component below is also a useful demonstration of a component that binds to the `value` property of a HTML `input`.

[Check a **JSFiddle Demo**](https://jsfiddle.net/acdcjunior/0Laa8xv7/127/) of the code below.

```html
{% raw %}
<script src="//unpkg.com/vue@2.6.11/dist/vue.min.js"></script>

<div id="app">
  myDate: <input-date v-model="myDate"></input-date>
  <p>myDate: {{ myDate }}</p>

  <button @click="setMyDateToToday">Set date one to today</button>
  <button @click="addADayToMyDate">Add a day to my date</button>
</div>
{% endraw %}
```

```javascript
Vue.component('input-date', {
  template: `
      <input
        type="date"
        ref="input"
        v-bind:value="dateToYYYYMMDD(value)"
        v-on:input="updateValue($event.target)"
        v-on:focus="selectAll"
      >
  `,
  props: {
    value: {
      type: Date,
      default: new Date()
    }
  },
  methods: {
    dateToYYYYMMDD(d) {
      // alternative implementations in https://stackoverflow.com/q/23593052/1850609
      return d && new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0];
    },
    updateValue: function (target) {
      this.$emit('input', target.valueAsDate);
    },
    selectAll: function (event) {
      // Workaround for Safari bug
      // http://stackoverflow.com/questions/1269722/selecting-text-on-focus-using-jquery-not-working-in-safari-and-chrome
      setTimeout(function () {
      	event.target.select()
      }, 0)
    }
  }
});

new Vue({
  el: '#app',
  data: {
    myDate: new Date('2011-04-11T00:00:01Z') // DO notice this date is set in UTC (Greenwich time) not your current timezone
  },
  methods: {
    setMyDateToToday() {
    	this.myDate = new Date();
    },
    addADayToMyDate() {
      // use the if because myDate can be null
      if (this.myDate) {
        // notice we don't just call .setDate(...) in myDate, instead
        // we create a new Date object and set it to this.myDate, so vue can detect it changed
        // this is not a caveat of this specific solution, but of any binding of dates
        this.myDate = new Date(this.myDate.setDate(this.myDate.getDate() + 1));
      }
    }
  }
});
// Notes:
// We use `myDate && new Date(myDate.getTime()-(myDate.getT...` instead
// of just `new Date(myDate.getTime()-(myDate.getT...` because `myDate` can be null.
```


  [1]: https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events
  [jsfiddle-direct]: https://jsfiddle.net/acdcjunior/r3cjf4x5/274/
