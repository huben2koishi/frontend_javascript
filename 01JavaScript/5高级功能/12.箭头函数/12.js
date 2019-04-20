"use strict";

// 箭头函数没有 this
let group = {
    title: 'Our Group',
    students: ['John', 'Pete', 'Alice'],
    showList() {
        this.students.forEach(
            student => console.log(this.title + ': ' + student)
        )
    }
};
group.showList();

// 箭头参数没有 arguments 变量
function defer(f,ms) {
    return function () {
        setTimeout(()=>f.apply(this,arguments),ms)
    };
}
function sayHi(who) {
    console.log('Hello: '+who);
}
let sayHiDeferred = defer(sayHi,2000);
sayHiDeferred('John');