---
layout: post
title: "JavaScript 条件语句优化"
date: 2020-01-09 17:04:52 +0800
categories: web
tags: js
permalink: /:categories/:month-:day-:title
excerpt: #为空的清空默认摘要
published: true
---

## 数组条件语句 Array.includes()
```javascript
// 常规
function printColor(curColor){
    if(curColor == 'red' || curColor == 'blue'){
        console.log('this is '+curColor);
    }
}
printColor('red');//this is red

// 优化
function printColor(curColor){
    var colors = ['red','blue','yellow','orange'];
    if(colors.includes(curColor)){
        console.log('this is '+curColor);
    }
}
printColor('red');//this is red
```

## 

>本文参考：[用JavaScript编写更好的条件语句](https://www.zcfy.cc/article/tips-to-write-better-conditionals-in-javascript-dev-community)