"use strict";

// Object.prototype
let obj = {};
console.log(obj.__proto__ == Object.prototype); // true

// Array Date Function 和其它内置对象都会在原型对象上挂载方法
// 它们的 prototype 的 prototype 就是 Object.prototype

let arr = [1, 2, 3];
console.log(arr.__proto__ == Array.prototype); // true
console.log(arr.__proto__.__proto__ == Object.prototype); // true
console.log(arr.__proto__.__proto__.__proto__); // null

