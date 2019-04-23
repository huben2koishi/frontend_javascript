"use strict";

// prototype 值为 null 或 对象
let animal = {
    eats: true,
    walk() {
        console.log('Animal walk');
    }
};
let rabbit = {jumps: true};
rabbit.__proto__ = animal;

console.log(rabbit.eats);
rabbit.walk();

// 原型链可以很长, 但不能形成闭环

// 对于数据属性, 写/删除 操作直接在对象上操作
rabbit.walk = function () {
    console.log('Rabbit walk');
};
rabbit.walk();

// 对于 getter//setter, 会在原型中查找并调用它们
let user = {
    firstName: 'Mike',
    lastName: 'Smith',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        [this.firstName, this.lastName] = value.split('');
    }
};
let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);
admin.fullName = 'Alice Cooper';
console.log(user.fullName);