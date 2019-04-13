"use strict";

let name1 = 'John';

function sayHi() {
    console.log('hello ' + name1);
}

name1 = 'Pete';
sayHi();

function makeWorker() {
    let name2 = "Pete";

    return function () {
        console.log(name2);
    };
}

let name2 = "John";
let work = makeWorker();

work();

// 词法环境: 环境记录 外部词法环境
// 函数访问一个变量时, 优先从内部词法环境中搜索, 然后是外部环境
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2