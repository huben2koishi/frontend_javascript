"use strict";

// this 丢失
let user = {
    firstname: 'John',
    sayHi() {
        console.log(`Hello, ${this.firstname}`)
    }
};
setTimeout(user.sayHi, 1000); // Hello, undefined

// 解决方案1 包装层
setTimeout(function () {
    user.sayHi();
}, 1000); // Hello, John
// 也可写成箭头函数
setTimeout(() => user.sayHi(), 1000); // Hello, John

// 此方法有个漏洞, 当调用 setTimeout 时原方法改变了, 函数就会被错误调用
user = {
    sayHi() {
        console.log('Another user in setTimeout')
    }
}; // 此时上面两次 setTimeout 调用将输出非期望结果

// 解决方案2 bind 此方案可避免方案1的漏洞
// func.bind(context)
// 它可以像函数一样被调用并且透明的将调用传递给 func 并设置 this=context
let user2 = {firstname: 'Jerry'};
function func() {
    console.log(this.firstname)
}
let funcUser = func.bind(user2);
funcUser();

// 对象的方法同样可行
let user3 = {
    firstname: 'Jack',
    sayHi() {
        console.log(`Hello, ${this.firstname}`)
    }
};
let sayHi = user3.sayHi.bind(user3);
sayHi();
setTimeout(sayHi,1000);