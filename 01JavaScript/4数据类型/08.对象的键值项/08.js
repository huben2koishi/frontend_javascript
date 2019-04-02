"use strict";

// Object.keys(obj) —— 返回一个包含该对象全部的键的数组。
// Object.values(obj) —— 返回一个包含该对象全部的值的数组。
// Object.entries(obj) —— 返回一个包含该对象全部 [key, value] 键值对的数组

// 它们类似 map 的 keys() values() entries()
// map 的这些方法返回的是 可迭代项
// object 的这些方法返回 数组

let user = {
    name: 'John',
    age: 18,
};

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

// 这些方法在遍历时会和 for..in 一样忽略 Symbol 作为键的值
// 如果想获取 Symbol 的键, 可使用 Object.getOwnPropertySymbols()
let a = Symbol('a');
let b = Symbol('b');
user[a] = 1;
user[b] = 2;
console.log(user);
console.log(Object.getOwnPropertySymbols(user));
// Reflect.ownKeys() 会返回所有键
console.log(Reflect.ownKeys(user));