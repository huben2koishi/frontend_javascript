"use strict";

// 字符串间的比较 按字典/词典的顺序
// 从首字母开始逐一比较, 字符大的字符串大
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Be' > 'Bee'); // false

// 不同类型间的比较 不同类型的值比较时优先转化为数字
console.log('2'>1);
console.log('01' == 1);
console.log(true == 1);

// 严格相等 === 在比较时不做类型的转换
console.log(0 === false);

// null 与 undefined
// 两者在非严格相等下只等于对方而不等于其他任何的值
// 使用数学式(< > <= >=)比较时, null 转化为 0, undefined 转化为 NaN

// 尽量不要使用 >= > < <= 去比较一个可能为 null/undefined 的变量