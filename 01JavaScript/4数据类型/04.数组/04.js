"use strict";

// 声明数组
let arr1 = new Array();
let arr2 = []; // 推荐使用 []

let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
fruits[1] = 'pear';
console.log(fruits.length);

// pop() 末端取出一个元素 push(item) 末端添加一个元素
fruits.pop();
console.log(fruits);
fruits.push('lemon');
console.log(fruits);

// shift() 前端取出一个元素 unshift(item) 前端添加一个元素
fruits.shift();
console.log(fruits);
fruits.unshift('berry');
console.log(fruits);

// push 和 unshift 均可一次添加多个元素

// 循环数组 for...of...
for (let item of fruits) {
    console.log(item);
}

// length 数组最大索引值+1 手动减小length, 数组本身也会变小
let arr = [1, 2, 3, 4, 5];
arr.length=2;
console.log(arr); // 1 2
