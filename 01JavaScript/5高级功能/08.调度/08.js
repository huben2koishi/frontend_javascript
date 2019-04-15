"use strict";

// setTimeout 让函数推迟一段时间运行
function sayHi(name) {
    console.log('hello ' + name);
}

let timerId = setTimeout(sayHi, 5000, 'John');
console.log(timerId); // 1

// clearTimeout 取消调度
clearTimeout(timerId);
console.log(timerId); // 1

// setInterval 周期执行函数
let interval = setInterval(sayHi, 1000, 'world');
setTimeout(() => {
    clearInterval(interval);
    console.log('stopped');
}, 5000);

// 递归版 setTimeout
// let timerId2 = setTimeout(function tick() {
//     console.log('tick');
//     timerId2 = setTimeout(tick, 2000);
// }, 2000);

// setTimeout(..., 0) 执行完当前代码后, 调用方法
setTimeout(()=>console.log('world'),0);
console.log('hello');
// 以上两条代码输出 hello world