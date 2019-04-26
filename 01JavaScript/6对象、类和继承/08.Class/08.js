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