"use strict";

// while 循环
let i = 0;
while (i < 3) {
    console.log(i++);
}

// do while 循环(较少使用)
let j = 2;
do {
    console.log(j--);
} while (j >= 0);

// for 循环
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// break 中止循环
let sum = 0;
while (1) {
    let value = +prompt('Enter a number:', '');
    if (!value) break;
    sum += value;
}
console.log('sum: ' + sum);

// continue 中止本次循环
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    alert(i);
}