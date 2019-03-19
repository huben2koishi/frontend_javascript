"use strict";

// 可达性
// 以某种方式可访问或可用的值
// 1. 当前函数的局部变量和参数
// 2. 嵌套调用时, 当前调用链上所有变量和参数
// 3. 全局变量
// 4. （还有一下内部的）
//
// 5. 如果一个值可以通过引用或引用链，从根值访问到，则认为这个值是可达的

let user = {name: 'John'};
// John 这个对象由 user 引用, 它是个可达值
// 如果 user 的值被覆盖了, 这个引用就没了, John 就成了不可达值
user = null;


// 相互关联的对象
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman,
    }
}
let family = marry({name: 'John'}, {name: 'Ann'});

// 移除两个引用(只删除其中一个是无效的)
delete family.father;
delete family.mother.husband;
// 此时 John 无法访问, 将从内存中释放

// 几个对象相互引用, 但外部没有对其任意对象的访问, 这些对象也是不可达的
delete family;


// 垃圾回收的基本算法被称为 “mark-and-sweep”。
//
// 定期执行以下“垃圾回收”步骤：
//
// 垃圾收集器找到所有的根，并“标记”（记住）它们。
// 然后它遍历并"标记"来自它们的所有参考。
// 然后它遍历到标记的对象并标记他们的引用。所有被遍历到的对象都会被记住，以免将来再次遍历到同一个对象。
// …一直这样，直到有未访问的引用（从根访问到）。
// 没有被标记的所有对象都被删除