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

用更加优秀的条件语法进行判断，不仅让代码减少，而且还跟加清楚明了。

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

## 提前退出/提前返回
```javascript
/* 需求：打印物品的长、宽、高。
 * 是否有这个物体，没有则抛出错误
 * 有长则输出长，没有则抛出错误
 * 有宽则输出宽，没有则抛出错误
 * 有高则输出高，没有则抛出错误
 */

// 常规
const printBoxDetail = box => {
    let result;

    if(box){
        if(box.length){
            if(box.width){
                if(box.height){
                    result = The box is ${box.length},${box.width} and ${box.height};
                }else{
                    result = 'Unknown height';
                }
            }else{
                result = 'Unknown width';
            }
        }else{
            result = 'Unknown length';
        }
    }else{
        result = 'No box';
    }
}

console.log(printBoxDetail());// No box
console.log(printBoxDetail({width:"2 meters wide"}));//Unknown length
console.log(printBoxDetail({length:"3 meters long"}));//Unknown width
console.log(printBoxDetail({length:"3 meters long",width:"2 meters wide"}));//Unknown height
console.log(printBoxDetail({length:"3 meters long",width:"2 meters wide",height:"1 meters high"}));//The box is 3 meters long,2 meters wide and 1 meters high

// 优化
const printBoxDetail = ({length,width,height} = {}) =>{
    if(!length) return "Unknown length";
    if(!width) return "Unknown width";
    if(!height) return "Unknown height";
    
    return The box is ${box.length},${box.width} and ${box.height};
}
```
```javascript
// 常规
function printStarWithMale(star,gender){
	let stars = ['tangsan','fanqie','tiancan','xieshao'];	
	
	if(star){
		if(stars.includes(star)){
			console.log(I like ${star});
			if(gender == 'male'){
				console.log(${star} is a male star I like);
			}
		}
	}else{
		throw new Error('No star from list!')
    }
}

printStarWithMale(null);//No star from list!
printStarWithMale('fanqie');//I like fanqie
printStarWithMale('fanqie','male');//fanqie is a male star I like

// 优化
function printStarWithGender()
```

>本文参考：[用JavaScript编写更好的条件语句](https://www.zcfy.cc/article/tips-to-write-better-conditionals-in-javascript-dev-community)