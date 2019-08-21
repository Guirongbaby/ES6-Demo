hahhahahhah 


// 1. 数组对应的解构赋值

let a = 1, b = 2, c = 3;
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

let a = 1;
let b = 2;
let c = 3;
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 声明3个变量
let [a, b, c] = [1, 266, 3];
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 2.复杂的结构赋值
let [a, [b], c] = [1, [2], 3];
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);


//  3.越过解析  ( 也属于不完全解构)

let [a, , b] = [1, 2, 4];
console.log('a:', a);  // 1
console.log('b:', b);  // 4

// 4. 配合展开运算符
let [a, [b, ...d], c] = [1, [2, 3, 4], 3];
console.log('a:', a);  // 1
console.log('b:', b);  // 2
console.log('c:', c);  // 3
console.log('d:', d);  //[3,4]

// 5.如果解构不成功， 变量的值就等于undefined
let [a, b] = [1];
console.log('a:', a);  // 1
console.log('b:', b);   // undefined

// 6.不完全解构
let [a, [b], c] = [1, [2, 3, 4], 3];
console.log('a:', a); // 1
console.log('b:', b);  // 2  其中3, 4  就越过了！
console.log('c:', c);  // 3

// 7. 数组的解构赋值： 如果等号的 右边不是数组， 那么将会报错
let [a, b] = null;
let [a, b] = undefined;
let [a, b] = {};
let [a, b] = 134;
let [a, b] = 'sas';
console.log('a:', a);  // s
console.log('b:', b);  // a 

// 8. 解构赋值允许指定默认值

let [a = 9, b = 0, c = 3] = [1, 2];
console.log('a:', a); // 1
console.log('b:', b); // 2
console.log('c:', c);  // 3

// 如果右边是undefined 的时候，  那么打印结果是默认值
let [a = 2, b = 9] = [undefined, 2]
console.log('a:', a);  // 2
console.log('b:', b);  // 2

// 9.  当一个 数组成员严格等于undefined, 默认值才会生效!  同上！
let [a = 9, b = a] =[undefined,10];

console.log('a:',a);  // 9
console.log('b:',b);  // 10

// 10. 默认值还可以引用解构赋值的其他变量， 但该变量必须已经声明
let[a= 9,b = a] = [1];
console.log('a:',a);  // 1
console.log('b:',b);  //  1    b 默认值= a
const arr = [
    {order: 1},
    {order: 2},
    {order: 0},
    {order: 23},
    {order: -991}
];

// [ { order: -991 },
//   { order: 0 },
//   { order: 1 },
//   { order: 2 },
//   { order: 23 } ]

const arr = [
     1,
     2,
     0,
     23,
     -991
];
// => []
const sortArr = arr.sort(function(a, b){
    return a - b;
});
console.log(sortArr)  // [ -991, 0, 1, 2, 23 ]
