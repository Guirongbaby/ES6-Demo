import { resolve } from "dns";
import { readFile } from "fs";

// 1. async 类似*  的用法。 await 类似于yield ;

// 在函数的最开始，设置async 标志，当前函数就是 异步函数， 而且函数返回值 是Promise实例,如果没有返回值或者非Promise都会被改造成 Promise 实例
// async 函数执行完成后，由于返回的是 Promise实例 所以，可以进行连续的then 和 catch

async function readFile() {
    // return 1; // Promise.resolve(1)
    console.log('async函数执行');
    let data = await new Promise((resolve, reject) => {
        console.log('await开始执行。');
        setTimeout(() => {
            resolve(3333);
        }, 1000)
    }).catch(e => { })  // 用catch 处理异常
    console.log('data :', data);
    // await Promise.reject(3);
    // await 1;
    // await 2; // 都会转为promise对象,但都是 resolve 状态

    return data;

    // await 3;
    // await 4;
}

readFile().then(data =>
    console.log('last:data :', data)) // promise 对象， catch异常处理
console.log('main');

//  上列执行顺序 :
// async函数执行
// await开始执行。
// main
// data : 3333
// last:data : 3333

// 5. async 的多种形式
// 函数声明
async function add(params) {
    await 1;
}

// 函数表达式
let f = async function () { };

// 对象的方法
let f = {
    async getName() {

    }
}

// Class 的方法
class User {
    async getName() {

    }
}
// 箭头函数
let f = async () => { };

// 6. 依次读取 两个文件内容， 并把文件内容写入到第三方文件

const fs = require('fs');
const path = require('path');

const f1 = path.join(__dirname, '02_const.js');
const f2 = path.join(__dirname, '06_string.js');
const f3 = path.join(__dirname, 'b.js');

function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile
            (fileName, 'utf8', (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            })
    })
}

async function joinFile(f1, f2, f3) {
    // 优化的p1
    let p1 = readFilePromise(f1);
    let p2 = readFilePromise(f2);
    let data1 = await p1;
    let data2 = await p2;
    // 优化部分
    fs.writeFile(f3, data1 + data2, 'utf8', error => {
        console.log('写入完成！');
    })
}

joinFile(f1, f2, f3).then(data => {
    console.log('最后的输出！');
})

