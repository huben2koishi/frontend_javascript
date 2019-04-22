"use strict";

// 属性有两种类型
// 1.数据属性 迄今为止使用的所有属性都是数据属性
// 2.访问器属性 获取和设置值的属性
let obj = {
    get propName() {
        // getter
    },
    set propName(value) {
        // setter
    }
};
// 当读取 obj.propName 时, 使用 getter; 设置值时, 使用 setter

let user = {
    firstName: 'John',
    lastName: 'Smith',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ');
    }
};
console.log(user.fullName);
user.fullName = 'Peter Cooper';
console.log(user.fullName);

// 访问器属性没有 value 和 writable, 但是有 get 和 set

// 可用defineProperty 创建访问器属性
Object.defineProperty(user, 'name', {
    get() {
        return `${this.firstName}+${this.lastName}`;
    },
    set(value) {
        [this.firstName, this.lastName] = value.split('+');
    }
});
console.log(user.name);

// getter 和 setter 可用作真实属性值的包装器, 以便对它们进行更多的控制
let user2 = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length<4){
            console.log('Name is too short');
            return;
        }
        this._name = value;
    }
};
user2.name = 'p';