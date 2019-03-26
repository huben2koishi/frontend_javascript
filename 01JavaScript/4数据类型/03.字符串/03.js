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
