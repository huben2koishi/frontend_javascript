"use strict";

// 解构赋值是一种特殊的语法，它让我们可以将数组或对象进行“拆包”，
// 存放到一系列的变量中，因为有时候使用变量更加方便

// 数组解构
let arr = ['Ilya', 'Kantor'];

let [firstname, surname] = arr;

console.log(firstname); // Ilya
console.log(surname); // Kantor

// let [firstname, surname] = 'Ilya Kantor'.split('');

// 解构赋值时原数组并没有被更改, 是以下代码的精简写法
// let firstname = arr[0];
// let surname = arr[1];

// 数组中不想要的元素可以通过添加额外的逗号来把它丢弃
let [, , titles] = ['Julius', 'Caesar', 'Consoul', 'of the Roman'];
console.log(titles); // Consoul

// 解构赋值可用于所有可迭代对象
let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);

// ... 收集剩余的元素
let [name1, name2, ...rest] = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(rest); // c d e f

// 赋值语句中的变量若未被赋值, 默认被当作 undefined
// 可以提供一个默认值给变量
let [name = 'Guest', age = '**'] = ['Ilya'];
console.log(name); // Ilya
console.log(age); // **

// 对象解构
let option = {
    height: 200,
    width: 100,
    title: 'Menu',
};
let {title, width, height} = option;
console.log(title + ' ' + width + ' ' + height);
// 属性可以赋值给不同名字的变量
let {width: w, height: h, title: t} = option;
console.log(t + ' ' + w + ' ' + h);

// 嵌套解构
let options = {
    size: {
        size1: 100,
        size2: 200,
    },
    items: ['Cake', 'Donut'],
    extra: true
};
let {
    size: {
        size1,
        size2,
    },
    items: [item1, item2],
    text = 'Menu'
} = options;
console.log(text);  // Menu
console.log(size1);  // 100
console.log(size2); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

// 智能函数参数
function showMenu({
                      title = 'Untitled',
                      width = 100,
                      height = 200,
                      items : [item1, item2]
                  }) {
    console.log(`${title} ${width} ${height}`);
    console.log(`${item1} ${item2}`);
}

showMenu({
    title: 'MyMenu',
    items: ['box', 'desk'],
});
