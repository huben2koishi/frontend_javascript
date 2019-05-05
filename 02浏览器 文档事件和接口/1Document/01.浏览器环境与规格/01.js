"use strict";

// window
//     DOM : document...
//     BOM : navigator, screen, location, frames, history, XMLHttpRequest...
//     JavaScript : Object, Array, Function...

// DOM 文档对象模型, 可以访问页面内容
document.body.style.background = "red";
setTimeout(() => {
    document.body.style.background = ""
}, 2000);

// BOM HTML规范的一部分, 是浏览器提供的附加对象, 用于处理文档之外的所有内容
//   navigator 提供有关浏览器和操作系统的背景信息
//     navigator.userAgent 关于当前浏览器 navigator.platform 关于平台
//   location 允许读取当前 url 并定向到新的 url
console.log(location.href);
if (confirm("前往百度?")) {
    location.href = "http://www.baidu.com";
}