"use strict";

// alert(msg) 弹出一段消息并暂停脚本, 知道用户点击 '确定'
alert('Hello');

// prompt(msg[, default]) 显示一个带有文本消息的模态窗口, 返回输入的文本
let age = prompt('How old are you?', 100);
alert(`you are ${age} years old`);

// confirm(question) 显示一个带有 question 和两个按钮的模态窗口：确定和取消
let isBoss = confirm("Are you the boss?");
alert(isBoss);