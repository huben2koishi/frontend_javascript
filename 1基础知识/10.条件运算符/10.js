"use strict";

// if-else 语句
// if圆括号中的表达式结构将转换为 Boolean 类型
//   0 '' null undefined NaN 都会转换为 false, 其他值转换为 true
let year = prompt('哪一年 ECMAScript-2015 发布？');

if (year < 2015) {
    alert('Too early...');
} else if (year > 2015) {
    alert('Too late...');
} else {
    alert('Exactly!');
}

// ? 三元运算符
(year < 2015)
    ? alert('Too early...')
    : (year > 2015)
        ? alert('Too late...')
        : alert('Exactly!');
