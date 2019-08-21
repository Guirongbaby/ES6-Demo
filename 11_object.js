// 1. 属性 的简洁表示法
let name = 'aicoder.com';
let phone = '115'
let person = {
    age: 19,
    // name:name;
    name,//   当属性名 和变量名相同时,可以直接省略后面的 
    phone
}

console.log('person :', person);   // person : { age: 19, name: 'aicoder.com', phone: '115' }

// 方法简写
let person = {
    age: 19,
    show: function () {
        console.log(this.age);// 19
    }
}
person.show();

let person = {
    age: 19,
    show(a, b) {
        console.log(this.age);
        console.log('a :', a);
        console.log('b :', b);
    }
}
person.show(3, 5);

// 3. 属性名表达式
let a = 'Canada';
let b = 'England';
let person = {
    [a + 1]: '123',
    [b]: 'haha',
    show() {
        console.log(this[a + 1]);  // 123
        console.log('this[b] :', this[b]); // this[b] : haha
    }
}
person.show();

// 4. 表达式 还可以用于定义方法名

let a = 'add'
let person = {
    [a + 1]: function () {
        console.log('2222 aicoder.com')  // 2222 aicoder.com
    }
}
person[a + 1]();
console.log('person :', person);  // person : { add1: [Function: add1] }

// 5. 对象的方法的name属性， 返回函数名

console.log(person[a + 1].name);  // add1

// 6. 有两种特殊情况： bind方法 创造的函数， name 属性返回bound加上原函数 的名字： Function构造函数的函数， name属性返回anonumous.

let f = function () { };
let k = f.bind({});

console.log('k.name :', k.name);  // k.name : bound f

let f = new Function('console.log("你好")');
f();
console.log('f.name :', f.name);

// 7. Object.is() 它用来比较两个值是否严格相等， 与严格比较运算符(===) 的行为基本一致。
// === 严格相等运算符： 不能处理 NaN不等于自身， 以及+0 等于 -0
console.log('0===-0:', 0 === -0);  // 0===-0: true
console.log('NaN === NaN :', NaN === NaN);  // NaN === NaN : false

Object.is(NaN, NaN);
console.log(Object.is(NaN, NaN)); // true
console.log('Object.is(0,-0) :', Object.is(0, -0));  // Object.is(0,-0) : false


// 8. Object.assign 方法用于对象的合并， 将源对象（source）的所有可枚举属性， 复制到目标对象（target）这个是浅拷贝。 
let m = { ai: 'aicoder' };
let K = Object.assign(m, { a: 1 }, { b: 2 }, { c: 3 });
console.log('k :', k);
console.log('m :', m);
// 注意： undefined 和null 无法转成对象， 所以如果它们作为第一个参数， 就会报错， 作为第二个或者后面的参数就会省略。

//   9. Objec.assign 拷贝数字和布尔类型没有效果， 字符串会转成 字符数组
let n = Object.assign({}, 33, true, { a: 2 });
console.log('n :', n);  // n : { a: 2 }

let n = Object.assign({}, 'aicoder.com');
console.log('n :', n);  // n : { '0': 'a',
// '1': 'i',
// '2': 'c',
// '3': 'o',
// '4': 'd',
// '5': 'e',
// '6': 'r',
// '7': '.',
// '8': 'c',
// '9': 'o',
// '10': 'm' }

// 10.  数组的assign
let n = Object.assign({}, ['a', 2, 3, 'aaa']);
console.log('n :', n);  // n : { '0': 'a', '1': 2, '2': 3, '3': 'aaa' }

// 11. 同名属性的替换
let m = {};
let k = Object.assign(m, { age: 18, name: '' }, { age: 20 });
console.log('k :', k);  // k : { age: 20, name: '' }

// 给对象赋默认值
let person = {};
person.age = 10;
console.log('person :', person);

// 浅拷贝对象

// 属性的可枚举性
let p = { age: 19, name: 'aicoder' };
Object.prototype.prop = 'father prop';
for (let k in p) {
    console.log('k :', k);
}
// 对象的每个属性都有一个描述对象 (Descriptor), 用来控制该属性的行为。 Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。

// 可枚举的应用
// for...in循环：  只遍历对象自身的和继承的可枚举的属性

// Object.keys(): 返回对象自身的所有可枚举的属性的键名  for ... of 循环配合
// JSON.stringify(): 只串行化对象自身的可枚举的属性
// Object.assign(): 忽略enumberable 为 false的属性， 只拷贝对象自身的可枚举的属性

// 10. 遍历的可枚举属性
let m = { age: 19 };
Object.defineProperties(m, {
    demo: {
        enumerable: false,
        value: '1222'
    }
});
console.log('m.demo :', m.demo);  // m.demo : 1222

// 11. Object.setPrototypeOf() 设置原型对象的方法 。 Object.create()

let p = {};
// p.__proto__

let p = Object.create({ age: 19 });
console.log('p.age :', p.age);  // p.age : 19

Object.setPrototypeOf(p, { name: 'sss' });

console.log('p.age :', p.age);  //p.age : undefined
console.log('p.name :', p.name);  // p.name : sss

let {a,...b} = {a:123, b:3344,c:'addd'};
console.log('a :', a);
console.log('b :', b);

//15. 扩展运算符 进行对象的浅拷贝复制
// 对象的扩展运算符(...) 用于取出参数对象的所有可遍历属性， 拷贝到当前对象之中
let k = {age:19}

//15. 扩展运算符 进行对象的浅拷贝复制
// 对象的扩展运算符(...) 用于取出参数对象的所有可遍历属性， 拷贝到当前对象之中
let k = {age:19};
let k2 = {name:'aicoder'};

let k3 = {...k,...k2};
console.log('k3 :', k3);  // k3 : { age: 19, name: 'aicoder' }







