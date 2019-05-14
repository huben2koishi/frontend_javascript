"use strict";

// 正则匹配 默认为 贪心匹配
let str = 'a "witch" and her "broom" is one';
let reg1 = /".+"/g;
console.log(str.match(reg1));

// ? 为量词匹配开启惰性模式
let reg2 = /".+?"/g;
console.log(str.match(reg2));

// 替代方法 /"[^"]+"/

// Html 注释
let reg3 = /<!--[\s\S]*?-->/;
// Html 标签
let reg4 = /<[^<>]+>/;