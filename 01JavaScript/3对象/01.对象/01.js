"use strict";

// 对象的创建
let obj = new Object();
let user = {};

// 文本与属性
user = {
    name: 'John',
    age: 30
};
user.isAdmin = true;

delete user.age;

// 属性名可为多字词语
user['likes birds'] = true;

// 计算属性
let fruit = prompt('你喜欢什么水果？', '');
let bag = {
    [fruit]: 5
};

// 存在值检查
let user1 = {
    name: 'Mike',
    age: 18,
};
alert('name' in user1);
alert('boom' in user1);

// for..in 循环
let user2 = {
    name: 'Jack',
    age: 23,
    isAdmin: true,
};
for (let key in user2) {
    console.log(key + ': ' + user2[key]);
}

// 对象复制是按引用复制的
let visitor = {name: 'Lancer'};
let master = visitor;
master.name = 'Saber';
console.log(visitor.name); // Saber

// 常量对象
const rulur = {name: 'Cindy'};

// 创建独立的复制对象
// 1. 创建一个新对象，遍历现有对象属性
// 2. object.assign()
let pre = {name: 'Tom'};
let clone = Object.assign({}, pre);
// 如果原对象的属性包括对象，复制的属性也会是相同对象
// 即assign() 是浅拷贝
