"use strict";

// Map 键值对的集合, 类似 object, 但支持所有类型作为键
// 主要方法
// new Map(iterable)    创建 map
// map.set(key, value)  根据 key 设置 value
// map.get(key)         根据 key 返回对应的 value, 如果 key 不存在, 返回 undefined
// map.has(key)         如果 key 存在, 返回 true, 否则返回 false
// map.delete(key)      移除 key 的值
// map.clear()          清空 map
// map,size             返回当前元素个数
let map1 = new Map();
map1.set('1', 'str1');
map1.set(1, 'num1');
map1.set(true, 'boolean1');
console.log(map1);
console.log(map1.get('1'));
console.log(map1.get(1));
console.log(map1.size);

// 在创建 map 时, 可以传递数组给构造函数
let map2 = new Map([
    ['1', 'str'],
    [1, 'num1'],
    [true, 'bool1'],
]);

// Object.entries() 将 object 转化为 map
let map3 = new Map(Object.entries({
    name: 'John',
    age: 18,
}));
console.log(map3);

// 遍历 map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50],
]);
// map.key()     返回 key 的迭代器
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}
// map.value()   返回 value 的迭代器
for (let amount of recipeMap.values()) {
    console.log(amount);
}
// map.entries() 返回 [key, value] 迭代器, for..of 循环默认使用
for (let entry of recipeMap.entries()) {
    console.log(entry);
}

// map 有个内建的 forEach() 方法, 类似 Array()
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value} in ${map}`);
});

// Set 值的集合, 每个值只出现一次
// 主要方法
// set set(iterable)    创建 set
// set.add(value)       添加 value
// set.has(value)       如果 value 存在, 返回 true, 否则返回 false
// set.delete(value)    移除 key 的值
// set.clear()          清空 set
// set.size             返回当前元素个数
let set1 = new Set();
let john = {name: 'John'},
    pete = {name: 'Pete'},
    mary = {name: 'Mary'};
set1.add(john);
set1.add(pete);
set1.add(mary);
set1.add(john);
set1.add(mary);

console.log(set1.size); // 3

// set 迭代
for (let user of set1){
    console.log(user.name);
}

set1.forEach((value, valueAgain, set) => {
    console.log(value);
});
// 适用于 Map 的迭代方法 set 也同样支持：
// set.keys() – 返回 set 中值的迭代对象，
// set.values() – 和 set.keys 一样，为了兼容 Map，
// set.entries() – 返回形如 [value, value] 的迭代对象，为了兼容 Map 而存在

// WeakMap key 只能为 object, 不支持迭代
// 主要方法 get(key) set(key, value) delete(key) has(key)
// 仅当作为 key 的对象存在引用时, 值才存在 map 中

// WeakSet value 只能为 object
// 主要方法 add(key, value) delete(key) has(key)
// 仅当对象存在其他位置的引用时它才存在于 set 中