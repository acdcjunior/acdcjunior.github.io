function toKebabCase(s) {
  return s.replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/[\s_]+/g, '-')
          .toLowerCase();
}

function dateToYYYYMMDD(d = new Date()) {
  return new Date(d.getTime()-(d.getTimezoneOffset()*60*1000)).toISOString().split('T')[0]
}

const categories = {
  junit: ['junit', 'tests'],
  tools: ['tools'],
  git: ['git'],
  'java-ee': ['java-ee'],
  selenium: ['selenium'],
  nosql: ['nosql'],
  html5: ['html5'],
  jquery: ['jquery', 'javascript'],
  typescript: ['typescript'],
  angular2: ['angular2', 'angular', 'typescript'],
  nodejs: ['nodejs', 'javascript'],
  design: ['design'],
  npm: ['npm', 'nodejs'],
  docker: ['docker'],
  ddd: ['ddd', 'architecture'],
  'spring-boot': ['spring-boot'],
  'vue.js': ['vue.js', 'javascript'],
  javascript: ['javascript'],
  tests: ['tests'],
  architecture: ['architecture'],
};

const [, , category, ...titleParts] = process.argv;

if (!Object.keys(categories).includes(category)) {
  console.log(`Category ${category} unknown.`);
  process.exit(-1);
}

const title = titleParts.join(" ");

const modified = dateToYYYYMMDD();

const post = `---
layout: single
title: '${title}'
category: '${category}'
tags: [${categories[category].map(s => `'${s}'`).join(', ')}]
lang: en-US
# lang: pt-BR
comments: true
share: true
mathjax: false
published: true
modified: ${modified}
---

This part also appears on the summary.

<!--more-->

This is the rest.

`;

let fs = require('fs');
let fileName = modified + '-' + toKebabCase(title) + '.md';
if (fs.existsSync(fileName)) {
  console.log(`File ${fileName} already exists.`);
  process.exit(-1);
}
fs.writeFileSync(fileName, post);
console.log(`File ${fileName} created.`);
