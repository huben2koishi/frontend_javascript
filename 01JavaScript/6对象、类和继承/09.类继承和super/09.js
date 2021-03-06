"use strict";

// 继承 extends
class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped`);
    }
}

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} hides`)
    }
}
// extends 的实质是给 Rabbit.prototype 添加了一个属性 [[prototype]]
// 它指向 Animal.prototype