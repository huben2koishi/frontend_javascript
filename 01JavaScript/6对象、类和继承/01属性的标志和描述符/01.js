"use strict";

// 属性的标志
// writable 是否可写
// enumerable 是否可在循环中列出
// configurable 是否可被删除

// Object.getOwnPropertyDescriptor(obj, propertyName) 获取属性的标志

let user = {name:'John'};
let descriptor = Object.getOwnPropertyDescriptor(user,'name');

console.log(JSON.stringify(descriptor,null,2));

// Object.defineProperty(obj, propertyName, descriptor) 修改属性标志