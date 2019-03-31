"use strict";

// splice(index [, count, elem1, elem2...])
// 从 index 开始删除 count 个元素, 添加 elem1, elem2..., 返回已删除的数组
let arr = ['I', 'study', 'JavaScript'];
arr.splice(1, 1);
console.log(arr);

arr = ['I', 'study', 'JavaScript'];
arr.splice(0, 3, 'right', 'now');
console.log(arr);

arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr.splice(0, 2));

arr = ['I', 'study', 'JavaScript'];
arr.splice(2, 0, 'complex', 'language');
console.log(arr);

// slice(start, end) 返回从 start 到 end 的子数组
let arr2 = ['t', 'e', 's', 't'];
console.log(arr2.slice(1, 3));

// contact(arg1, arg2...) 将原数组与 arg1 arg2 结合
// 如果参数是数组或具有 Symbol.isConcatSpreadable 属性, 则其所有元素都会被复制
// 否则, 复制参数本身
let arr3 = [1, 2],
    arg1 = {
        0: 'something',
        length: 1
    },
    arg2 = {
        0: 'something',
        1: 'else',
        [Symbol.isConcatSpreadable]: true,
        length: 2
    };
console.log(arr3.concat(3, [4, 5], arg1));
console.log(arr3.concat(3, [4, 5], arg2));

// arr.indexOf、arr.lastIndexOf 和 arr.includes 方法与字符串操作具有相同的语法，只不过这里是对数组元素而不是字符进行操作：
//
// arr.indexOf(item, from) 从索引 from 查询 item，如果找到返回索引，否则返回 -1
// arr.lastIndexOf(item, from) — 和上面相同，只是从尾部开始查询
// arr.includes(item, from) — 从索引 from 查询 item，如果找到则返回 true
let arr4 = [1, 0, false];
console.log(arr4.indexOf(0)); // 1
console.log(arr4.indexOf(null)); // -1
console.log(arr4.includes(0)); // true

// arr.find(function(item, index, array) {
//   如果查询到返回true
// });
let arr5 = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Mike'},
    {id: 3, name: 'Peter'},
];
let result = arr5.find(value => value.id == 1);
console.log(result);
// findIndex() 类似find(), 返回元素的索引而非元素本身

// filter() find()查询的是使函数返回true的第一个值,
// 如果需要匹配的有很多, 可以使用 filter
let someUsers = arr5.filter(item => item.id < 3);
console.log(someUsers);

// arr.map(function(item, index, array) {
//   返回新值
// }); 对数组中每个元素调用函数并返回符合结果的数组
let lengths = ['bilbo', 'gandalf', 'nazgul'].map(item => item.length);
console.log(lengths);

// sort(fn) 对数组进行排序, 默认按字符串排序, fn为自定义比较的方法
let arr6 = [1, 2, 15];
arr6.sort();
console.log(arr6); // 1 15 2
arr6.sort((a, b) => {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
    // return a-b;
});
console.log(arr6); // 1 2 15

// reverse() 反转数组元素的顺序
let arr7 = [1, 3, 5, 7, 9];
arr7.reverse();
console.log(arr7);

// split(s) 通过分隔符s分割字符串为数组
let names = 'Bilbo, Gandalf, Nazgul';
let arr8 = names.split(', ');
for (let name of arr8) {
    console.log(`a message to ${name}`);
}
// 调用空参数会将字符串分隔为一个字母数组

// join(s) 将数组通过分隔符s组合为一个字符串

// let value = arr.reduce(function(previousValue, item, index, arr) {
//   ...
// }, initial);
let arr9 = [1, 2, 3, 4, 5];
let sum = arr9.reduce((sum, current) => sum + current, 0);
console.log(sum); // 15
// reduceRight() 类似reduce(), 遍历顺序为从右至左

// arr.forEach(function(item, index, array){
//   ...
// }) 遍历数组元素执行函数
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => console.log(`${item} is at ${index} in ${array}`));

// isArray() 判断是否为数组
console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true
