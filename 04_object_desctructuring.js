// 1. 对象也可以进行解构赋值， 变量必须与属性同名， 才能取到正确的值

let { a, b } = { a: 123, b: 987 };
console.log('a:', a);
console.log('b:', b);

// 2.对象的结赋值跟顺序没关系

let { b, a } = { a: 444, b: 111 };
console.log('a:', a);
console.log('b:', b);

// 3. 对象解构赋值的默认值也是undefined
let [a, b, c] = { a: 333, b: 555 };
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 4.变量名与属性名 不一致

let { a: ax, b: bx } = { a: 123, b: 234 };
console.log('ax:', ax);  //ax: 123
console.log('bx', bx);  //bx 234

//5.嵌套结构的对象解构
let { a: { x: ax, y: ay }, user: { name, td: std } } = { a: { x: 10, y: 20 }, user: { name: 'guirong', age: 18, td: [1, 2, 3] } };
console.log('ax:', ax);  //10
console.log('ay:', ay);  // 20 
console.log('std:', std);  // [1,2,3]
console.log('age:', age);  //ReferenceError: age is not defined
console.log('name:', name);  // guirong 

// 6. 指定默认值
let { x = 0, y = 0 } = { x: 10 };
console.log('x:', x); // x: 10
console.log('y:', y);  // y: 0

let { x = 0, y = 0 } = { x: null, y: 10 };
console.log('x:', x);  // null
console.log('y:', y);  // 

// 7. 解构现存对象的方法
let { max, min } = Math;
console.log('max(1,2,4,9,0):', max(1, 2, 4, 9, 0));  // max(1,2,4,9,0): 9
console.log('min(2,9 , 0,44,11):', min(2, 9, 0, 44, 11)); // mix(2,9 , 0,44,11) :0


// 8. 对数组进行对象属性的解构， 数组也是特殊的对象。  数组下标

let arr = [1, 2, 6];
let {2: c} = arr;
// console.log('a:', a);  //1
// console.log('b:', b);  // 2 
console.log('c:', c);  // 3
// console.log('d:', d);  // undefined