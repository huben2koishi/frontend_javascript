"use strict";

// number 类型: 整数 小数 Infinity -Infinity NaN
let n = 123;
n = 12.345;
// Infinity 代表无穷大
console.log(1 / 0);
// NaN 代表一个计算错误,
// 它是一个错误的或未定义的数学操作所得到的结果
console.log('not a number' * 5);

// string 类型
let str1 = "hello";
let str2 = 'single quotes are ok too';
let phrase = `can embed ${str1}`;
// 双引号和单引号都是“简单”引用, 两者并没有什么差别。
// 反引号是功能扩展的引用，允许通过 ${…}，将变量和表达式嵌入到字符串中

// boolean 类型, 仅包含两个值: true false
let checked = true;
let isGreater = 1 > 4;

// null, 空值
let name = null;

// undefined 未被赋值
let x;
console.log(x);

// object 和 symbol 类型
// object 为特殊类型, symbol 用于创建对象的唯一标识符

// typeof 运算符
console.log(typeof undefined); // "undefined"
console.log(typeof 0); // "number"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"  (1)
console.log(typeof null); // "object"  (2)
console.log(typeof alert); // "function"  (3)
// typeof null 的结果为 object 是 js 语言的错误, null 的类型就是 null