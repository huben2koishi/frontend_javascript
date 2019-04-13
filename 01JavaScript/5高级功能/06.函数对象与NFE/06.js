"use strict";

// 函数对象包含一些便于使用的属性
// 名称 name 返回函数的名称
function sayHi() {
    console.log('Hi');
}

console.log(sayHi.name); // sayHi
// 长度 length 返回函数入参的个数(余参不计数)
function f1(a) {
}

function f2(a, b) {
}

function many(a, b, ...more) {
}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2

// 命名函数表达式（NFE，Named Function Expression）
// 允许在函数内部调用自己  外部不可见
let sayHi = function func(who) {
    if (who) {
        console.log(`hi, ${who}`);
    } else {
        func('guest');
    }
};