"use strict";

// (...) 捕获组
console.log('Gogogo now'.match(/(go)+/i)); // Gogogo go

// 捕获内容
let str = '<h1>hello</h1>h1>';
let reg = /<(.*?)>/g;
console.log(reg.exec(str)); // <h1> h1
console.log(reg.exec(str)); // </h1> /h1

// 嵌套捕获组
let str2 = '<span class="my">';
let reg2 = /<(([a-z]+)\s*([^>]*))>/;
console.log(str2.match(reg2)); // <span class="my"> span class="my" span class="my"

// 非捕获组
let str3 ='Gogogo John';
let reg3 = /(?:go)+ (\w+)/i;
console.log(str3.match(reg3)); // Gogogo John

// 查找颜色
let color = /#(([0-9a-f]){3}){1,2}\b/ig;
// 查找正数
let num = /\d+(\.\d+)?/g;
// 查找所有数
let number = /-?\d+(\.\d+)?/g;
// 解析算数表达式
let parse = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
console.log('1.2 * 3.4'.match(parse));