"use strict";

// 全局对象提供任意地方可用的变量和函数
// 浏览器中为 'window', NodeJS 中为 'global'

// 浏览器 'window' 对象
// window 还提供 '浏览器窗口' 功能
console.log('宽： ' + window.innerWidth);
window.open('http://baidu.com');

// 顶级 var 变量和函数声明后自动称为 window 的属性

// 全局范围内的 this 的值为 window

// 全局对象的用法
// 1. 将信息放入全局对象, 以便在所有其它脚本中访问
window.currentUser = {
    name:'John',
    age:18
};
// 2. 测试全局变量以验证是否支持现代语言特性
if(window.Promise){
    document.write('支持！')
}
// 3. 添加环境不支持（比如旧的浏览器）但存在于现代标准中的功能
if (!window.Promise) {
    // window.Promise = ...  自定义实现现代语言特性
}