// 1. 数组的扩展运算符的应用

console.log('ss', 2, 3, 4);  // ss 2 3 4

let k = [1, 3, 4, 5, 'hghghg'];
console.log(...k);  // 1 3 4 5 'hghghg'

// 例如： 用Math.max 方法 获取数组中的最大值
// 替代函数的apply 方法

let m = [1, 9, 22, 29, 19, 2];  // 
console.log(Math.max(1, 2, 8));  // 8

let max = Math.max.apply(null, m);
console.log('max :', max);  // max : 29


// ES6 中 展开运算符 配合数组特别好用！
let maxEs6 = Math.max(...m);
console.log('maxEs6 :', maxEs6);  //maxEs6 : 29

// 2. rest参数的逆应用

function sum(...arr) {
    return arr.reduce((pre, next) => pre + next);
}
console.log('sum(1,2,3,4) :', sum(1, 2, 3, 4));   // sum(1,2,3,4) : 10


let m = [2, 9, 8, 22, 10];
console.log('sum(...m) :', sum(...m)); // sum(...m) : 51



// 3.复制数组
// es5 的方法
let m = [2, 8, 'aa', 'aicoder.com'];
let newArr = m.slice();
console.log('newArr === m :', newArr === m);  // newArr === m : false
console.log('newArr :', newArr);   // newArr : [ 2, 8, 'aa', 'aicoder.com' ]

let newArr2 = m.concat();
console.log('newArr2 :', newArr2); // newArr2 : [ 2, 8, 'aa', 'aicoder.com' ]


// es6 方法
let newArr3 = [...m];
console.log('newArr3 :', newArr3); // newArr3 : [ 2, 8, 'aa', 'aicoder.com' ]

let [...newArr4] = m;
console.log('newArr4 :', newArr4);

// 4. 合并数组
let m = [2, 8, 'aa', 'yunnan'];
let m2 = [2, 8, 'aa', 'yunnan'];
let m3 = [2, 8, 'aa', 'yunnan'];

// let k = m.concat(m2, m3);
// console.log('k :', k);

let n = [...m, ...m2, ...m3, '----']
console.log('n :', n);
//n : [ 2,
// 8,
// 'aa',
// 'yunnan',
// 2,
// 8,
// 'aa',
// 'yunnan',
// 2,
// 8,
// 'aa',
// 'yunnan',
// '----' ]

// 5.字符串 展开
let k = 'cctv.com';
console.log('[...k] :', [...k]);  // [...k] : [ 'c', 'c', 't', 'v', '.', 'c', 'o', 'm' ]

// 6.querySelectorAll 返回值的展开

let arr = [...document.querySelectorAll('li')]

// 7. Array.from()转换成数组：  1： 类数组对象  2：  可遍历的对象 
//  类数组对象
let obj = {
    '0': 'a',
    '1': 2,
    'length': 2
};
let k = Array.from(obj);
console.log('k:', k);   //  k: [ 'a', 2 ]

// 8. 数组实例的find() 和 findIndex()  用于找出一个 符合条件的数组成员或者索引

let k = [2, 56, 6, 1, 99];
let m = k.find((val, index) => {
    console.log('index :', index);  // index : 0  index: 1
    return val >= 10;
});
console.log('m :', m); // m : 56

console.log('k.findIndex(val => val >= 10) :', k.findIndex(val => val >= 10));
// k.findIndex(val => val >= 10) : 1

// 9. 数组实例的fill 方法使用给定值， 填充一个数组
let k = new Array(10);
k.fill(3);
console.log('k :', k);  // k : [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3 ]
// fill 方法 还可以接受第二个， 和第三个参数.  用于指定填充的起始位置 和结束位置

// 10. 数组实例的 entries() ,keys()  和values()
let k = [2, 8, 12, 222];
for (var [key, val] of k.entries()) {
    console.log('key :', key);
    console.log('val :', val);
}
// key : 0
// val : 2
// key : 1
// val : 8
// key : 2
// val : 12
// key : 3
// val : 222


// 11. 数组实例的 includes()
let k = [2, 9, 0, 888,NaN];
k.includes(2);  // 判断是否存在2
console.log('k.includes(2) :', k.includes(2));  // true
console.log('k.includes(888) :', k.includes(888));  // true
console.log('k.includes(NaN) :', k.includes(0));  //true


