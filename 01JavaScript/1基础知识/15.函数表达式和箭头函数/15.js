"use strict";

// 函数表达式
let sayHi = function () {
    alert('hello');
};

console.log(sayHi);

// 回调函数
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOK() {
    alert('you are agreed.');
}

function showCancel() {
    alert('you canceled the execution');
}

ask('Do you agree?', showOK, showCancel);

// 匿名函数
ask('Do you agree?',
    function () {
        alert('you are agreed.');
    },
    function () {
        alert('you canceled the execution');
    }
);

// 函数声明 创建的函数在脚本初始化阶段被创建
// 函数表达式 创建的函数在运行到的时候创建

// 箭头函数
let doubleNum = n => n * 2;
let sayBye = () => alert('Bye.');
let max = (a, b) => {
    return a > b ? a : b
};
let welcome = (age > 18) ? () => alert('hello') : () => alert('greetings');
