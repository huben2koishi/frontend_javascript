"use strict";

// 对象在进行转换时, 有3中暗示的可能
// string 操作需要一个字符串时. 如 alert(obj); other['obj'] = 1;
// number 操作需要一个数字时. 如 n += obj; n = obj1 - obj2; b = obj1 >obj2;
// default 不确定操作期望的类型时. 如 n = obj1 +obj2; if (user ==1)...

// 大于/小于运算符 <> 也可以同时用于字符串和数字。
// 不过，它使用 “number” 暗示，而不是 “default”。这是历史原因

// 为了进行转换，JavaScript 尝试查找并调用三个对象方法：
//
// 调用 obj[Symbol.toPrimitive](hint) 如果这个方法存在的话，
// 否则如果暗示是 "string", 尝试 obj.toString() 和 obj.valueOf()，无论哪个存在。
// 否则，如果暗示 "number" 或者 "default", 尝试 obj.valueOf() 和 obj.toString()，无论哪个存在。

// Symbol.toPrimitive
let user = {
    name: 'John',
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `name: ${this.name}` : this.money;
    }
};
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// toString/valueOf
let man = {
    name: 'Mike',
    money: 1000,
    toString() {
        return `{name: ${this.name}`;
    },
    valueOf() {
        return this.money;
    }
};
alert(man);
alert(+man);
alert(man + 500);

// 通常我们希望有一个全能的方法来处理转换, 可以只实现 toString