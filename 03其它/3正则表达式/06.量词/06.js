"use strict";

// 数量
// {n}   匹配n个
// {n,}  匹配至少n个
// {n,m} 匹配n到m个

// 缩写
// + {1,}  匹配至少1个
// ? {0,1} 匹配0或1个
// * {0,}  匹配0或多个

// 浮点数
console.log("0 1 12.34 567".match(/\d+\.\d+/g)); // 12.34
// 没有属性的HTML开标签
console.log('<body> ... </body>'.match(/<[a-z][a-z0-9]*>/g)); // <body>
// 没有属性的HTML标签
console.log('<body> ... </body>'.match(/<\/?[a-z][a-z0-9]*>/g)); // <body> </body>
// /\.{3,}/ /#[0-9a-fA-F]{6}\b/