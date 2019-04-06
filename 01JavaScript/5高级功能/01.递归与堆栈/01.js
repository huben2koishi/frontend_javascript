"use strict";

// 递归 函数调用自身
function pow(x, n) {
    console.log('3');
    return x == 1 ? 1 : x * pow(x, n - 1)
}

let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) { // 情况 (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // 求数组的和
    } else { // 情况 (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // 递归调用子部门，对结果求和
        }
        return sum;
    }
}

console.log(sumSalaries(company));

// 链表
let list = {value: 1};
list.next = {value: 2};
list.next.next = {value: 3};
list.next.next.next = {value: 4};

// 链表可以很容易被拆分
let secondList = list.next.next;
list.next.next = null;

// 合并
list.next.next = secondList;