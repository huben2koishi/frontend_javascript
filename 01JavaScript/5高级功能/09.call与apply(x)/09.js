"use strict";

function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func(x); // (**)
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(2));

// 以上方法不能用于对象的方法
let worker = {
    someMethod() {
        return 1;
    },
    slow(x) {
        console.log("Called with " + x);
        return x * this.someMethod();
    }
};
//worker.slow = cachingDecorator(worker.slow());
//console.log(worker.slow(2));
// 包装器将原始函数调用为 (**) 行中的 func(x)。
// 并且，当这样调用时，函数得到 this = undefined

// func.call(context, arg1, arg2...) 显式设置 this
function say(phrase) {
    console.log(this.name + ': ' + phrase);
}

let user = {name: 'John'};

say.call(user,'hello'); // John: hello

// 上面的（**）例子中, 将 func(x) 改为 func.call(this, x) 即可正确传递
function cachingDecorator2(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        let result = func.call(this, x); // "this" 现在被正确的传递了
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator2(worker.slow); // 现在让他缓存起来

console.log( worker.slow(2) ); // 生效了
console.log( worker.slow(2) ); // 生效了, 不会调用原始的函数了。被缓存起来了

// 使用 func.apply 传递多个参数
function say2(time, phrase) {
    console.log(`[${time}] ${this.name}: ${phrase}`);
}

let user2 = { name: "John" };

let messageData = ['10:00', 'Hello']; // 成为时间和短语

// user 成为 this，messageData 作为参数列表传递 (time, phrase)
say2.apply(user2, messageData); // [10:00] John: Hello (this=user)

// call 和 apply 之间唯一的语法区别是
// call 接受一个参数列表, 而 apply 则接受带有一个类似数组的对象

// func.call(context, ...args); 使用 spread 运算符将数组作为参数列表传递
// func.apply(context, args);   与使用 apply 相同

// 呼叫转移
let worker3 = {
    slow(min, max) {
        alert(`Called with ${min},${max}`);
        return min + max;
    }
};

function cachingDecorator3(func, hash) {
    let cache = new Map();
    return function() {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.apply(this, arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1];
}

worker3.slow = cachingDecorator3(worker3.slow, hash);

alert( worker3.slow(3, 5) ); // works
alert( "Again " + worker3.slow(3, 5) ); // same (cached)