"use strict";

// m 多行模式
let str = `1st place: Winnie
2nd place: Piglet
33rd place: Eeyore`;
let reg = /^\d+/gm;
console.log(str.match(reg));