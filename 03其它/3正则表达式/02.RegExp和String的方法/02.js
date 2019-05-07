"use strict";

// str.search(reg) 返回第一个匹配项所在位置, 没有的话返回-1

// str.match(reg) 不用 'g' 修饰符情况下
//    只会查找第一个匹配项
// 返回一个数组, 里面有匹配项和额外属性 index(匹配项所在位置) input(原始字符串)
let reg1 = /l/;
let str = 'hello';
console.log(str.match(reg1));

// str.match(reg) 用 'g' 修饰符情况下
// 返回一个由匹配项组成的数组
let reg2 = /l/g;
console.log(str.match(reg2));