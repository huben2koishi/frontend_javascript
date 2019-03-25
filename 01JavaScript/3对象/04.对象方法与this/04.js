"use strict";

// 方法简写
let user = {
    name: 'John',
    sayHi() {
        console.log('Hello');
    },
};
user.sayHi();

// 方法中的 this
let man = {
    name:'Mike',
    age:30,
    sayHi() {
        console.log(this.name);
    },
};
man.sayHi();