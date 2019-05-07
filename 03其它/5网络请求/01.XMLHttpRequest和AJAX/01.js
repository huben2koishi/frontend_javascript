"use strict";

let xhr = new XMLHttpRequest();

xhr.open('GET', 'hello.txt');

xhr.send();

xhr.onload = function () {
    if (xhr.status != 200) {
        console.log(xhr.status+' : '+xhr.statusText);
    } else {
        document.write(xhr.responseText);
    }
};