"use strict";

// 构造函数模式
function User(name) {
    this.sayHi = function () {
        console.log(name);
    };
}

let user = new User('John');
user.sayHi();

// 工厂类模式
function User2(name, birthday) {
    function calcAge() {
        return new Date().getFullYear() - birthday.getFullYear();
    }

    return {
        sayHi() {
            console.log(`${name}, age: ${calcAge()}`);
        }
    }
}

let user2 = User2('John', new Date(2000, 0, 1));
user2.sayHi();

// 基于原型的类
function User3(name, birthday) {
    this._name = name;
    this._birthday = birthday;
}

User3.prototype._calcAge = function () {
    return new Date().getFullYear() - this._birthday.getFullYear();
};

User3.prototype.sayHi = function () {
    console.log(`${this._name}, age: ${this._calcAge()}`);
};

let user3 = new User3('John', new Date(2000, 0, 1));
user3.sayHi();

// 类基于原型的继承
function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype.jump = function () {
    console.log(`${this.name} jumps`);
};
let rabbit = new Rabbit('My Rabbit');

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(`${this.name} eats`);
};

Rabbit.prototype.__proto__ = Animal.prototype;
rabbit.eat();
rabbit.jump();