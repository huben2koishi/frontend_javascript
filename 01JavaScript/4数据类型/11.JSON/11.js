"use strict";

// 将对象转为 JSON JSON.stringify()
let student = {
    name: 'John',
    age: 18,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    girlfriend: null,
};
let student_json = JSON.stringify(student);
console.log(typeof student_json);
console.log(student_json);

// stringify 支持转化 对象 数组 字符串 数字 Boolean null
// 函数 symbol undefined 会被跳过
// 嵌套对象可自动转换
// 不能转化有循环引用的对象

// 排除和替换 replacer
// JSON.stringify(value [, replacer, space])
// value    要编码的值
// replacer 要编码的属性数组或映射函数 function(key, value)
// value    文本添加缩进 空格 和 换行
let room = {number: 23};
let meetup = {
    title: 'Conference',
    participants: [{name: 'John'}, {name: 'Alice'}],
    place: room,
};
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));
console.log(JSON.stringify(meetup, function replacer(key, value) {
    // alert(`${key}: ${value}`); // to see what replacer gets
    return (key == 'occupiedBy') ? undefined : value;
}));

// 格式化 spacer
let user = {
    name: "John",
    age: 25,
    roles: {
        isAdmin: false,
        isEditor: true
    }
};
console.log(JSON.stringify(user, null, 2)); // 多行显示, 缩进2

// 定制 toJSON()
let room2 = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
let meetup2 = {
    title: 'Conference',
    room2
};
console.log(JSON.stringify(meetup2));

// 将 JSON 转为对象 JSON.parse(str [, reviver])
// str JSON字符串解析
// reviver 将每个 (key, value) 对调用的可选函数进行转换
let man = '{"name": "John", "age": 25, "roles": {"isAdmin": "false", "isEditor": "true"}}';
man = JSON.parse(man);
console.log(man);

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let obj = JSON.parse(str, (key, value) => {
    if (key == 'date') {
        return new Date(value);
    }
    return value;
});
console.log(obj.date.getDate());