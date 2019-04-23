"use strict";

//  prototype 原型
let animal = {eats: true};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('white rabbit');
console.log(rabbit.eats);

// 函数都有一个默认的 prototype 属性
// 为一个只有属性 constructor 的对象, 它指向函数本身
