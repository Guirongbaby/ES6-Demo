// 1. 字符串作为数组进行解构赋值。 字符串可以当对象来用，可以当数组来用。
let [a, b, c] = '21345';
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 2. 字符串当做对象进行解构赋值

let { toString: s } = 'www.cctv.com';
console.log(s);  // [Function: toString]

let { toString: s, 0: a, 1: b, 2: c } = 'aicoder.com';
console.log(s);  // [Function: toString]
console.log('a:', a);
console.log('b:', b);
console.log('c:', c);

// 3. number类型 和boolean 类型的解构赋值

let { toString: s } = true;
let { toString: m } = 123;
console.log('s:', s);  // s: function toString() { [native code] }
console.log('m:', m);  //  m: function toString() { [native code] }

// 4. 函数参数解构赋值
function add([a, b]) {
    console.log('a:', a);  // a:1
    console.log('b:', b);  // b: 2
    return a + b;
}

console.log('add([1,2]):', add([1, 2]));  //add([1,2]): 3

// 5. 函数参数解构赋值 带默认值
function add([a = 1, b = 20]) {
    console.log('a:', a);  // a: 1
    console.log('b:', b);  // b: 20
    return a + b;
}
console.log('add([1,2]):', add([1]));  // add([1,2]): 21

//6. 函数参数对象解析赋值

function add({ a = 1, b = 1 }) {
    return a + b;
}
console.log('add({a:2}):', add({ a: 2 }));  // add({a:2}): 3


function add({ a = 1, b = 1 }) {
    return a + b;
}
console.log('add():',add());  // TypeError: Cannot destructure property `a` of 'undefined' or 'null'.

// 7. 给对象的解析一个默认值
function add ({a = 1, b = 12} ={}){
    return a + b;
}
console.log('add():',add());  //  add():13