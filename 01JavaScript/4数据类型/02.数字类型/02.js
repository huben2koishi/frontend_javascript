"use strict";

// js 所有数字都以64位格式 IEEE-754 存储, 即 双精度

let num1 = 10,      // 整数
    num2 = 3.14,    // 小数
    num3 = 1.2e6,   // 科学计数
    num4 = 0xff,    // 16进制
    num5 = 0b10110, // 2进制
    num6 = 0o377;   // 8进制

// toString(base) base 参数为需要转换的进制, 最大为32
console.log(num1.toString(8));

// 四舍五入
// Math.floor() 向下舍
// Math.cell()  向上入
// Math.round() 四舍五入
// Math.trunc() 删除小数部分

// toFixed(n) 四舍五入到n位小数 (返回字符串)

// isFinite 和 isNaN
console.log(isNaN(NaN)); // true
console.log(isNaN('str')); // true
// NaN 不等于任意值, 包括其本身
console.log(NaN === null); // false
// isFinite(value) 若value是常规数字返回true, 如果是NaN/Infinity/-Infinity 返回false
console.log(isFinite(12)); // true

// Object.is(a,b) 类似 a === b, 除了
//   Object.is（NaN，NaN）=== true
//   Object.is（0，-0）=== false

// parseInt() 和 parseFloat() 尝试从字符串中读出一个数字
console.log(parseInt('100px')); // 100
console.log(parseInt('12.34')); // 12
console.log(parseFloat('12.5em')); // 12.5
// 它们还可以指定数字的进制
console.log(parseInt('0xff',16)); // 255

// Math.random() 返回 [0,1) 的随机数
console.log(Math.random());
// Math.max(a,b,c...) 返回参数中最大值
console.log(Math.max(4,5,2,1));
// Math.pow(a,n) 返回a的n次幂
console.log(Math.pow(2,5));