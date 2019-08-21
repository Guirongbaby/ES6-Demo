// 1. ES6  中新 的原始数据类型 Symbol ， 表示独一无二 的值。
// String, Number ,Boolean  Object  Function null undefined Symbol

let s1 = Symbol(); // 创建一个Symbol
let s2 = Symbol();
console.log('s1 === s2 :', s1 === s2);  // s1 === s2 : false 因为每个symbol值都是唯一的

console.log('s1 :', s1);
s1.toString(); // s1 : Symbol()

console.log('String(s1)');  // String(s1)


// Symbol 函数 可以接受一个字符串作为参数， 表示对Symbol实例的描述
let s3 = Symbol('aicoder.com');
console.log('s3 :', s3);

// 2.Symbol 不能参与运算， 但是可以Symbol 值可以显示转为字符串
let s4 = Symbol('sss');
console.log('s4.toString() + "===":', s4.toString() + "===");

// 3.作为属性名的Symbol




