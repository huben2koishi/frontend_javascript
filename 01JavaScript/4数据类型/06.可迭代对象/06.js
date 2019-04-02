"use strict";

// 为使得对象可迭代, 需添加 Symbol.iterator 方法
// 该方法返回一个对象 它必须有一个 next() 方法
// 当 for...of 循环希望取得下一个值时, 就会调用这个 next() 方法
// next() 方法返回结果格式必须为 {done: boolean, value: any}
let range = {
    first: 1,
    second: 2,
    third: 3,
    forth: 4,
    fifth: 5,

    [Symbol.iterator]() {
        return {
            current: this.first,
            last: this.fifth,
            next() {
                if (this.current <= this.last) {
                    return {done: false, value: this.current++};
                } else {
                    return {done: true};
                }
            }
        }
    },
};
for (let item of range) {
    console.log(item);
}

// 字符串和数组都是可迭代的
for (let char of 'hello') {
    console.log(char);
}

// 显式调用迭代器
let iterator = 'world'[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// Iterables 应用于 Symbol.iterator 方法的对象
// Array-likes 有索引和 length 属性的对象
let arrayLike = {
    0: 'hello',
    1: 'world',
    length: 2,
};

// Array.from() 将一个可迭代对象或类数组对象转化为数组
let arr = Array.from(arrayLike);
console.log(arr.pop());

let arr2 = Array.from([1, 2, 3, 4, 5], n => n * n);
console.log(arr2);

// Array.from() 能正确处理 utf-16 扩展字符
let str = '𝒳😂𩷶';
console.log(str);
console.log(str.slice(1,3)); // 字符串的 slice() 方法无法处理 utf-16 扩展字符
console.log(Array.from(str).slice(1,3).join(''));