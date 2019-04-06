"use strict";

// 创建 Date 对象
// new Date() 不带参数时返回表示当前日期和时间的对象
let now = new Date();
console.log(now);
// new Date(milliseconds) 参数为 1970/01/01 00:00:00 开始经过的毫秒数
// 这个参数又被称为时间戳
let Jan01_1970 = new Date(0),
    Jan02_1970 = new Date(24*3600*1000);
console.log(Jan01_1970);
console.log(Jan02_1970);
// new Date(dateString) 参数为字符串
let birthday = new Date('1995-04-13');
console.log(birthday);
// new Date(year, month, date, hours, minutes, seconds, ms) 参数是当地时区的日期组合信息. 只有前两个参数是必须的
// year 必须是 4 位数
// month 从 0 开始计数
// date 是当月的具体某一天, 默认为 1
// 其他参数默认为 0
let day1 = new Date(2014,4);

// 访问日期信息
// getFullYear() 返回年份 (4位数)
// getMouth() 返回月份 (从0到11)
// getDate() 返回一月中的第几天
// getHours() getMinutes() getSeconds() getMilliseconds() 返回时分秒毫秒
// getDay() 返回一周中的第几天 (从0星期天到6星期六)

// 以上方法有与之对应的 UTC 版本方法, 它们会返回基于 UTC+0 时区的时间信息
// 只需要在 "get" 之后插入 "UTC", 如: getUTCFullYear()， getUTCMonth()， getUTCDay()

// 以下方法没有 UTC 版本
// getTime() 返回日期的时间戳
// getTimezoneOffset() 返回时区偏移数 (以分钟为单位)

// 设置日期信息
// setFullYear(year [, month, date])
// setMonth(month [, date])
// setDate(date)
// setHours(hour [, min, sec, ms])
// setMinutes(min, [sec, ms])
// setSeconds(sec [, ms])
// setMilliseconds(ms)
// setTime(milliseconds) 使用自 1970-01-01 00:00:00 UTC+0 开始的毫秒数来设置整个日期对象
// 以上方法均有 UTC 版本, 如 setUTCHours()

// 自动校准 Date可设置超出范围的值, 它会自动校准
let date1 = new Date('2016-02-28');
date1.setDate(date1.getDate()+3);
console.log(date1.toLocaleDateString()); // 2016/03/02

// Date.now() 返回当前时间戳
// 它相当于 new Date().getTime() 但它性能更好
console.log(Date.now());

// Date.parse(str) 从字符串中读取日期
// 字符串的格式为 YYYY-MM-DDTHH:mm:ss.sssZ
// YYYY-MM-DD 年-月-日
// T 分隔符
// HH:mm:ss.sss 时:分:秒.毫秒
// Z 代表 UTC+0
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');
console.log(ms);