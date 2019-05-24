"use strict";

// 反向引用 \s 和 $n

// 替换字符串中的组 $n
let name = 'John Smith';
console.log(name.replace(/(\w+) (\w+)/, "$2 $1"));

// 模式中的组 \n
let str = 'He said: "She\'s the one!".';
let reg = /(['"])(.*?)\1/g;