"use strict";

// try.. catch
// 处理有效代码中的异常, 被称为 runtime errors / exceptions
// 当一个异常发生时, js 会生成一个包含异常细节的对象
// 这个对象会作为参数传递给 catch

// 异常对象的属性
// name     异常的名称
// message  异常的详细文字描述
// stack    当前的调用栈

let json = '{ "age":"18" }';

try {
    let user = JSON.parse(json);
    console.log(user);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

// throw 生成异常对象

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError('没有 name 属性');
    }
    console.log(user.name);
} catch (e) {
    console.log('JSON Error: ' + e.message);
}