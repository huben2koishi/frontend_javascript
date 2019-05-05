"use strict";

//  prototype 原型
let animal = {eats: true};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('white rabbit');
console.log(rabbit.eats); // true

// 函数都有一个默认的 prototype 属性
// 为一个只有属性 constructor 的对象, 它指向函数本身
function Rabbit1() {
    /* 默认 prototype
    Rabbit.prototype = {constructor: Rabbit};
     */
}
console.log(Rabbit1.prototype.constructor == Rabbit1); // true

let rabbit1 = new Rabbit1();
console.log(rabbit1.constructor == Rabbit1); // true

// 可以使用与现有构造函数相同的构造函数创建新对象
let rabbit2 = new rabbit1.constructor();