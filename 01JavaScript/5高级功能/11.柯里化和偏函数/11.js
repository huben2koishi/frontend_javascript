"use strict";

// 偏函数
function mul(a, b) {
    return a * b;
}

let double = mul.bind(null, 2);
console.log(double(4));

// 无上下文使用偏函数
function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    name: 'John',
    say(time, phrase) {
        console.log(`[${time}] ${this.name}: ${phrase}`);
    }
};

user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

user.sayNow('hello');

// 柯里化 将调用形式如 func(a, b, c) 的函数转化为 func(a)(b)(c) 形式
function curry(func) {
    return function (a) {
        return function (b) {
            return a + b;
        }
    }
}

function sum(a, b) {
    return a + b;
}

let  carriedSum = curry(sum);
console.log(carriedSum(1)(2));