import {
  resolve
} from "url";
import {
  rejects
} from "assert";

let [a, ...b] = [1, 2, 3];
console.log(b); //[2,3]


// 对象的解构赋值
const b = {
  name: 23
};
let a = {
  age: 19,
  b
};
let {
  age
} = a; // let age = a.age;
console.log(age); // 19

//字符串当数组进行解构赋值
let str = "abcdef";
let [a, b, ...c] = str;
console.log('c:', c); //c: [ 'c', 'd', 'e', 'f' ]
console.log('a:', a); //a: a
console.log('b:', b); //b: b

// 默认值的解构赋值
let k = {
  age: 123
};
let {
  name
} = k; // let name = k.name？ k 没有name
console.log("name:", name); //undefined

// 只要解析是undefined ,赋值时undefined就走默认值1， 只要结构的不是undefined 就走默认值的name=0,

let k = {
  age: 123,
  name: undefined
};
let {
  name = 0, age
} = k; // let name = k.name？ k 没有name
console.log("name:", name); //name:0
console.log("age:", age); //age:123



let {
  toString
} = 333;
toString = toString.bind(333);
console.log(toString);
// let a = 3;
// a.toString(); // 临时创建一个包装对象(new Number(3).toString())
// 由包装对象 toString方法 执行完后，包装对象被释放。
let a = 3;
let aObje = new Number(3); // 装箱
// aObje.valueOf() // 拆箱


let {
  toString
} = 333;
toString = toString.bind(22);
console.log(toString()); // 22
//call apply : 立即执行当前函数, 改变当前的 this 指向。
// bind:返回一个 新函数, 新函数的this => bind (第一个参数);

// var a ={
//   toString:function(){
//     console.log(1);
//   }
// };
//  let {toString} = a;
//  toString();


let a = /[abc%{1,7}\d\w\s]/gis; // 全局忽略大小写，unicode 字符


console.log(...[2, 3, 4]) // 2,3,4

function add(x, y, z = 9) {
  return x + y + z;
}
// 函数的 length  属性是形参的个数，有默认值 的情况下，函数的length属性会失真
console.log("add.length :", add.length); //add.length : 2

console.log("add(1,2,undefined):", add(1, 2, undefined)); // add(1,2,undefined):12


// typeof 是一元运算符

function b(x, ...c) {
  console.log("x:", x); // x:1
  console.log("c:", c); //c: [ 3, 4, 9 ]
  console.log("typeof c :", typeof c); // =>object
}
b(1, 3, 4, 9);

var x = "1234";
var d = +x;
d = +(x); //() 只是分组， 有没有都一样


// var a = 3 ;
// var b =0;
//  (b=20) &&a<= 4
// console.log(b);

// let a = 8;
// let b = 0;
// (b=0) || a >= 10
// console.log(a);

// 箭头函数
// => 右边是函数体 左边是参数 一条语句时，表达式的花括号可以省略
// 有多行语句时，一定要有{}
const t = a => a > 0;

const t = a => {
  return a > 0;
};

// 现在只想返回对象{age:a}, 就在花括号外边加上(),
const k = a => {
  age: a
};
const k = a => ({
  age: a
});

const k = [3, 4, 5];
for (let item of k) {
  console.log("item:", item);
}

// item: 3
// item: 4
// item: 5

const k = [3, 4, 5];
let m = k.filter(item => item >= 4);
console.log("k:", k); //k: [ 3, 4, 5 ]
console.log("m:", m); //m: [ 4, 5 ]


// 数组如何去重？ 根据 id  
// lodash 

const t = [3, 4, 5];
Math.max(...t);


let age = 19;
let t = "name";
const a = {
  age,
  show() {
    console.log("this.age:", this.age);
  },
  [t]: "laoma"
};
console.log("a:", a); // a: { age: 19, show: [Function: show], name: 'laoma' }

// reduce 是非常典型的函数式编程， => 当前函数的执行结果，作为下一次函数的参数的传入
let k = [1, 2, 3, 4, 5, 8];
// 每一次 的return 作为 第二次  的prev
let sum = k.reduce((prev, next) => {
  return prev + next;
}, 4);
console.log("sum:", sum); // 27


let arr = Array.from(new Set([1, 2, 2, 4]));
console.log("arr:", arr);


// new 一个 Promise 对象， 相当于创建状态基了 
let p = new Promise((resolve, reject) => {
  // 处理操作 
  setTimeout(() => {
    // 模拟超长时间执行
    // 状态改变
    resolve(2);
  }, 3000);
});

p.then(res => {
  console.log("res:", res);
}).catch(res => {
  console.log(res);
}); //res:2


// async 标注了之后 代表是异步函数
function getUser() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/api/user",
      type: "GET",
      data: "",
      success: function (data) {
        resolve(data);
      },
      error: function (e) {
        reject(e);
      }
    });
  });
}

let api = {
  getUser
};


// async 修饰的函数， 返回值是一个promise , 如果return 不是promise对象
// 那么会封装成 promise 再返回

async function add(a, b) {
  return a + b;
}

let k = add(8, 9);
k.then(res => {
  console.log("res:", res); // res:17
});






// 使用 await 
// 1. 必须只能出现在async 里面。
// 2. 后面跟一个promise 对象。 (如果不是 ， 立即包装成promise 对象)
// 3. await 会暂停 当前函数执行， 把执行控制权让出，继续其他的代码执行。
// 4. 当await 后面的 promise 发生状态改变，自动回来继续执行， 而且会把promise的结果
// 作为当前表达式的结果返回。
// 5. 要配合 try 和 catch(否则会有问题)
async function add(a, b) {
  return a + b;
}

(async () => {
  let k = await add(8, 9);
  console.log("k:", k); // k:17
})();

