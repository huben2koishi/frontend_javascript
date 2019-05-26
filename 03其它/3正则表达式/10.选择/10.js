"use strict";

// 选择 |
let str = 'First HTML appeared, then CSS, then JavaScript';
let reg = /html|php|css|java(script)?/gi;
console.log(str.match(reg));

// 时间的正则
let time = /([01]\d|2[0-3]):[0-5]\d/g;
console.log('00:00 10:10 23:59 25:99 1:2'.match(time));

// 匹配 bb-tag 对
let tag = /\[(b|url|quote)\][\s\S]*?\[\/\1\]/g;
let str2 = `
  [b]hello![/b]
  [quote]
    [url]http://google.com[/url]
  [/quote]
`;
console.log(str2.match(tag));

// 匹配字符串
let strings = /"(\\.|[^"\\])*"/g;
let str3 = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';
console.log(str3.match(strings));

// 匹配完整标签
let style = /<style(>|\s.*?>)/g;
console.log('<style> <styler> <style test="...">'.match(style));