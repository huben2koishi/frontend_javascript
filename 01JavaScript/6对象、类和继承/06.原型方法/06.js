"use strict";

// 获取/设置原型的方法
// Object.create(proto[, descriptors]) 使用 proto 作为原型和可选的属性描述创建一个对象
// Object.getPrototypeOf(obj) 返回 obj 的 [[prototype]]
// Object.setPrototypeOf(obj, proto) 将 obj 的 [[prototype]] 设置为 proto

let animal = {eats: true};

let rabbit = Object.create(animal);

console.log(rabbit.eats); // true
console.log(Object.getPrototypeOf(rabbit) == animal); // true
Object.setPrototypeOf(rabbit, {});

// Object.create 有个可选参数, 这允许在创建对象时添加额外的属性
let cat = Object.create(animal, {
    jumps:{
        value:true
    }
});
console.log(cat);