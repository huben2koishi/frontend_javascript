"use strict";

// rest参数 ... (修饰形参)
function sumAll(...args) {
    let sum = 0;
    for (let i of args) {
        sum += i;
    }
    console.log(sum);
}

sumAll(1, 2, 3, 4, 5);

// argument 变量 类数组对象, 内容为函数的参数
function showName() {
    console.log(arguments.length);
    console.log(arguments[0] + '\n' + arguments[1]);
}

showName('hello', 'world');
// 箭头函数没有 argument 变量

// spread操作符 ... (修饰实参)
let arr1 = [3, 5, 1];
let arr2 = [6, 3, 7, -9];
sumAll(...arr1);
sumAll(...arr1, ...arr2);
// 可以使用spread操作符合并数组
let merged = [0, ...arr1, 3, 2];
console.log(merged);