"use strict";

// 开始符 ^ 结束符 $
let str1 = "Mary had a little lamb, it's fleece was white as snow";
let str2 = 'Everywhere Mary went, the lamp was sure to go';
let reg = /^Mary/g;
console.log(str1.match(reg)); // Mary
console.log(str2.match(reg)); // null

let email = /[-.\w]+@([\w-]+\.)+[\w-]{2,20}$/g;

let color = /^#[0-9a-f]{6}$/gi;

let mac = /([0-9a-f]{2}:){6}[0-9a-f]{2}/gi;