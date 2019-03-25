"use strict";

// symbol 值为 唯一标识符
let id1 = Symbol("id");
let id2 = Symbol("id");
// 即使描述一样, 两个 symbol 也不相等
console.log(id1 == id2); // false

// symbol 不会自动转换为 string
//alert(id1); // 会报错
console.log(id1.toString());

// 使用Symbol 作为对象键值, 可以使再次使用时不会覆盖原有值
let user = {name: 'John'};

let id = Symbol('id');
user[id] = 'Symbol1';
id = Symbol('id');
user[id] = 'Symbol2';
console.log(user);

// 要在定义时使用 symbol, 需要使用方括号
let num = Symbol('id');
let man = {
    name: 'John',
    [num]: 123,
};

// symbol 不参与 for...in 循环, Object.assign 时会复制symbol属性

// 全局 symbol 注册表
let s1 = Symbol.for('id'); // 如果此 symbol 不存在, 则创建
let s2 = Symbol.for('id'); // 如果此 symbol 存在, 则返回此symbol
console.log(s1 == s2);

// 从 symbol 返回其名称
let s3 = Symbol.for('name');
console.log(Symbol.keyFor(s3)); // name