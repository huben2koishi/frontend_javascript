"use strict";

// 属性的标志
// writable 是否可写
// enumerable 是否可在循环中列出
// configurable 是否可被删除或修改

// Object.getOwnPropertyDescriptor(obj, propertyName) 获取属性的标志

let user = {name: 'John'};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));

// Object.defineProperty(obj, propertyName, descriptor) 修改属性标志
Object.defineProperty(user, 'age', {value: '18'});
let descriptor2 = Object.getOwnPropertyDescriptor(user, 'age');
console.log(JSON.stringify(descriptor2, null, 2));

// 常规给对象创建属性时, 其标志默认为 true
// 使用上方法创建的属性, 其标志默认为 false

// Object.defineProperty(obj, descriptors) 一次定义多个属性

// Object.getOwnPropertyDescriptors(obj) 获取全部属性标志

// Object.preventExtensions(obj) 禁止添加属性
// Object.seal(obj) 禁止添加/删除属性，为所有现有的属性设置 configurable: false。
// Object.freeze(obj) 禁止添加/删除/更改属性，为所有现有属性设置 configurable: false, writable: false