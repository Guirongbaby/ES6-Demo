// 9. 箭头函数复习

const fun = function (a, b) {
    return a + b;
};

const fun = (a, b) => a + b;

const f1 = () => {
    console.log(2);
    return 9;
};

//  10. 如果不需要返回值的时候 , 可以用void标志。
const f2 = a => void console.log(a);

// 如果想返回一个对象，
const f3 = () => ({ a: 1, b: 2 });
let arr = [0, -1, -5, 88, 232, 7];
arr.sort((a, b) => a - b);
console.log('arr :', arr);  // arr : [ -5, -1, 0, 7, 88, 232 ]

// 箭头函数有几个使用注意点 :

// (1) 函数体内的this 对象， 就是定义是所在的对象， 而不是使用时 所在的对象
// (2) 箭头函数不可以当做构造函数， 也就是说， 不可以使用new 命令， 否则会抛出一个错误

// (3) 箭头函数不可以使用 arguments参数（对象）， 该对象在函数体内不存在，如果要用， 可以用rest 参数代替

// (4) 不可以使用yield 命令， 因此箭头函数不能用作 Generator 函数。


//  11.尾调用 尾函数  (特点就是: 它不会形成堆栈调用的一个嵌套)
// 一个函数内部在return 的时候，调用了另外一个函数,  如下:
function b() { }

function add() {
    return b(); // 尾函数
}

function add() {
    return b() + b(); // 不是尾函数 调用  ( 因为参与运算了)
}

function add() {
    return b() + b(); // 不是尾函数调用(也参与运算了！)
}

// 12. 尾递归

// sum(10)
function sum(num) {
    if (num >= 1) {
        return sum(num - 1) + num;
    } else {
        return 1;
    }
}
console.log('sum(10) :', sum(10));  // sum(10) : 56


let sum = 0, num = 10000;
for (let i = 1; i <= num; i++) {
    sum += i;
}
console.log('sum:', sum);  // sum: 50005000

// 递归的优化 -> 尾递归的优化 -> 循环

function sum(num, total = 0) {
    if (num >= 0) {
        return sum(num - 1, total + num);
    } else {
        return total;  // num = 0 , 就 return total
    }
}
console.log('sum(1000) :', sum(1000));  // sum(1000) : 500500


// 6. 设置了参数的默认值， 函数进行声明初始化时，参数会形成一个单独的作用域(context). 等到初始化结束， 这个作用域就会消失。

let x = 1;
function add(a, b = x) {  // 赋值时会形成一个单独的作用域
    let x = 2;
    console.log('b :', b);  // b : 1
}
add(1);
// 7. ES6 引入 rest 参数， (形式为...变量名) ， 用于获取函数的多余参数

function add(...nums) {
    return nums.reduce((pre, cur, index) => {
        console.log('pre :', pre);
        console.log('cur :', cur);
        console.log('index:',index);
        return pre + cur;
    });
}
add(4,5,2);

// pre : 4
// cur : 5
// index: 1
// pre : 9
// cur : 2
// index: 2

// 8. 函数的严格模式的改变
