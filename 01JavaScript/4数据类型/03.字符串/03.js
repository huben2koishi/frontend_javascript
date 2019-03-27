"use strict";

// 字符串可包含在单引号、双引号和反引号中
let single = 'single-quoted',
    double = "double-quoted",
    backticks = `backticks`;
// 反引号允许嵌入表达式、字符串跨行

// 转义字符
// \b 空格
// \f 换页
// \n 换行(LF)
// \r 回车(CR)
// \t tab
// \uNNNN NNNN的Unicode符号
// \U{NNNNNNNN} 特殊符号

// length 属性
console.log(single.length);

// 访问字符串的n位置, 可使用 str[n] 或 str.charAt(n)
console.log(single[1]);
console.log(single.charAt(single.length-1));
// 如果没有找到, [] 返回 undefined, charAt 返回空字符串


// toLowerCase() 改为小写
// toUpperCase() 改为大写

// str.indexOf(substr, pos) 从str的第pos位开始查找substr, 返回匹配的位置, 否则返回-1
let str = 'Widget with id';
console.log(str.indexOf('Widget')); // 0
console.log(str.indexOf('widget')); // -1 检索大小写敏感

// str.lastIndexOf(substr, pos) 从字符串末尾开始搜索
// str.includes(substr, pos) 返回str是否包含substr
// str.startsWith(substr) 返回str是否以substr开头
// str.endsWith(substr) 返回str是否以substr结尾

// 获取子字符串 substring substr slice
// str.slice(start [, end]) 返回str从start到end(不包括)的部分
let str1 = 'stringify';
console.log(str1.slice(0,5)); // strin
// start end 可为负值, 意为从字符串结尾开始计算

// str.substring(start [, end]) 同slice, 但它允许end大于start
console.log(str1.substring(5,1)); // trin

// str.substr(start [, length]) 返回str从start开始长length的部分
console.log(str1.substr(2,4)); //ring

// 建议使用 slice

// str.codePointAt(pos) 返回字符串pos位置的字符代码
console.log('a'.codePointAt(0)); // 97
console.log('A'.codePointAt(0)); // 65

// str.fromCodePoint(code) 通过数字code创建字符
console.log(String.fromCodePoint(90)); // Z
// 90的16进制为5a, 还可用 \u005a 表示 Z
console.log('\u005a');

// 字符串的比较
// 1. 小写字母 > 大写字母
// 2. 带有指示性标记的字母"不正常", 如 Ö
// str1.localeCompare(str2) 大于返回1 小于返回-1 等于返回0
console.log('asd'.localeCompare('b')); // -1