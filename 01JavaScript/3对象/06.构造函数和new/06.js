"use strict";

// 构造函数
function User(name) {
    // this = {};（隐式创建）

    this.name = name;
    this.isAdmin = false;

    // return this;（隐式返回）
}

let user1 = new User('Jack');
alert(user1.name);
alert(user1.isAdmin);

// new.target
function Man() {
    alert(new.target);
}

Man();
new Man();

// 构造函数 return 如果return对象则返回它, 而不是this; 如果return一个原函数则忽略
function BigUser() {
    this.name = "John";
    return {name: "Godzilla"};  // returns 一个 object
}
alert(new BigUser().name);  // name 属性值为 Godzilla

function SmallUser() {
    this.name = "John";
    return; // 完成执行, returns this
    // ...
}
alert(new SmallUser().name);  // John