// let {toString} = 333;
// toString = toString.bind(333);
// console.log(toString());

// let a = 3;
// a.toString();
// console.log(a);  // 3 


let {toString } = 333;
toString = toString.bind(22);
// call apply: 立即执行函数， 改变当前的this  指向。
// bind : 返回一个新函数， 新函数的this => bind (第一个参数)；
console.log(toString());  // 22 

// function add(x,y,z=9){}
// console.log("add.length :",add.length);  // add.length : 2


const b = {name:23};
let a = {
  age:19,
  b
};
let {age} = a;
console.log(age); // 19

let str = 'abcdef';
let [a,b,...c] = str;

console.log('a :', a);
console.log('b :', b);

