"use strict";

// toString 当需要一个值的字符串形式时就会自动进行 string 转换
// , 也可以显式调用 String(value)
let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

// toNumber 在算术函数和表达式中会自动进行 number 转换
// undefined   NaN
// null        0
// true /false 1
// string      从字符串中读出数字, 空字符串为 0, 错误返回 NaN
console.log('6' / '2');
// 也可以显式调用 Number(value), 如果字符串不是一个有效的数字则会返回 NaN
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

// toBoolean 转换为 boolean 类型
// 0 '' null undefined NaN 转为 false, 其它转为 true
console.log(Boolean(1));
console.log(Boolean('hello'));
console.log(Boolean(''));