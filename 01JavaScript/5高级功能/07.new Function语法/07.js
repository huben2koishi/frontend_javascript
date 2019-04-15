"use strict";

// 创建函数时可以使用 new Function（arg1[,..argN], functionBody)
let sum = new Function('a', 'b', 'return a+b');
console.log(sum(2, 3));