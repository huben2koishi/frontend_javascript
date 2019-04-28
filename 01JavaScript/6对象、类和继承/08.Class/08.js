"use strict";

// class 使用干净整洁的语法来定义基于 prototype 的类
class User {
    constructor(name) {
        this.name = name;
    }
}

User.prototype.sayHi = function () {
    console.log(`hello ${this.name}`);
};

let user = new User('John');
user.sayHi();

// getter setter
class User2 {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this.name;
    }

    set name(value) {
        if (value.length < 4) {
            alert("Name is too short.");
            return;
        }
        this.name = value;
    }
}

// class 中只能定义方法, 若想添加一些非函数类型的值, 需手动更改 prototype
class User3 {
}

User3.prototype.test = 5;
console.log(new User3().test);

// class 表达式
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase);
        }
    }
}

let User4 = makeClass('hello');

new User4().sayHi();

// 静态方法
class User5 {
    static staticMethod() {
        console.log(this == User5);
    }
}
User5.staticMethod();