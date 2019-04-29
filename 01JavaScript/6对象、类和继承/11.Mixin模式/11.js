"use strict";

// mixin
let say = {
    sayHi() {
        console.log('hi ' + this.name)
    },
    sayBye() {
        console.log('bye ' + this.name)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, say);

new User('Dude').sayBye();