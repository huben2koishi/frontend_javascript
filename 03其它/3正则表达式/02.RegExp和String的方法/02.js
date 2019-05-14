"use strict";

// str.search(reg) 返回第一个匹配项所在位置, 没有的话返回-1

// str.match(reg) 不用 'g' 修饰符情况下
//    只会查找第一个匹配项
// 返回一个数组, 里面有匹配项和额外属性 index(匹配项所在位置) input(原始字符串)
let reg1 = /l/;
let str = 'hello';
console.log(str.match(reg1));

// str.match(reg) 用 'g' 修饰符情况下
// 返回一个由匹配项组成的数组, 但没有额外属性
let reg2 = /l/g;
console.log(str.match(reg2));

// str.split(reg|substr) 使用 reg 或 substr 来分隔字符串
console.log("12-34-56-78".split(/-/));

// str.replace(str|reg, str|func) 搜索和替换字符串
// 第二个参数中可使用特殊符号
//      $$ "$"
//      $& 整个匹配项
//      $` 匹配项前面字符串部分
//      $' 匹配项后面字符串部分
//      $n 第n个括号内匹配的内容

// reg.test(str) 同 str.search(reg)

// reg.exec(str)
//      无 'g' 修饰: 同 str.match(reg)
//      有 'g' 修饰: 返回第一个匹配项并记住, 再次执行会返回下一个匹配项