"use strict";

// 字符集合
//      \d 数字
//      \s 空格符 包括 空格 制表符 换行符
//      \w 字母
//      \b 单词边界
// 以上对应的反义集合
//      \D 非数字
//      \S 非空格符
//      \W 非字母
//      \B 非单词边界
// 特殊字符类
//      . 任意字符

let str1 = '+7(903)-123-45-67';
let reg1 = /\d/;
console.log(str1.match(reg1)); // [7]
let reg2 = /\d/g;
console.log(str1.match(reg2)); // [7,9,0,3,1,2,3,4,5,6,7]

let str2 = 'CSS3 is cool';
let reg3 = /CSS\d/;
console.log(str2.match(reg3)); // [CSS3]

let str3 = 'Hello Java!';
console.log(str3.match(/\bHello\b/)); // ['Hello']
console.log(str3.match(/\bJava\b/)); // ['Java']
console.log(str3.match(/\bHell\b/)); // null
console.log(str3.match(/\bJava!\b/)); // null

let str4 = 'Breakfast at 09:00 in the room 123:456.';
let reg4 = /\d{2}:\d{2}/;
console.log(str4.match(reg4)); // ['09:00']