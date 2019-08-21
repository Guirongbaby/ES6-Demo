// 1. Class 的基本语法

function Person(name = 'aicoder', age = 19) {
    this.age = age;
    this.name = name;
}

Person.prototype.show = function () {
    console.log(this.name, this.age);
}

let p = new Person('xixi');
p.show();

// ES6  使用class 定义类型
class Person {
    show() {
        console.log(this.PName);
    }
    get PName() {
        return this._pName;
    }

    get PName(val) {
        this._pName = val;
    }
}

let p = new Person();
p.PName = 'aicoder.com';
p.show();

console.log('typeof Person :', typeof Person);  // Person 类型 ，其实本质跟原来的构造函数一样的
console.log('Person.prototype.show :', Person.prototype.show);

// 2. 类上面的方法都是定义在 类的原型上的。


// 3. 构造函数constructor 方法
class Person {
    constructor(name = 'aicoder.com', age = 19) {
        this.age = age;
        this.name = name;
    }
    show() {
        console.log('this.age :', this.age);  // this.age : 19
        console.log('this.name :', this.name);  // this.name : aicoder.com
    }
}
// 4. es6 中用class定义的类型， 必须用new 构建。
let p = new Person();
p.show();
let p2 = new Person('mama', 20);
p2.show();
// 使用new 的时候，自动调用constructor 方法。 如果没有显示定义， 一个空的constructor 方法会被默认添加

//  5. 构造函数中， 返回其他对象。
class Person {
    constructor(name, age) {
        return {
            name, age
        }
    }
}
let p = new Person('ss', 123);
console.log('p :', p);  // p : { name: 'ss', age: 123 }

// 6. 类不存在变量提升 (hoist)
let p = new Person();
p.show();

class Person {
    show() {
        console.log('ssss');   // 在class 的方法内部， this ==> 构造函数的实例
        // ReferenceError: Person is not defined
    }
}

// 7. this 的指向， 类的方法内部 如果含有this  , 它默认指向类的实例

// 使用析构 的时候，要注意this 可能 不是指向 当前对象。

class Person {
    show() {
        console.log('this :', this);
    }
}

let p = new Person();
p.show();
let { show } = p;
show();

// 解决办法： 1. bind  2. 箭头函数  

// 8. Class 的静态方法
// 类型的方法加上static 关键字， 就表示该方法不会被 实例继承， 而是直接通过类来调用， 这就称为"静态方法 "。

class Person {
    static Add(a, b) {
        return a + b;
    }
}
Person.PI = 3.1415926;
console.log(Person.Add(10, 11));

// 9. Class 的继承 extends

// (1) 把父的构造函数 里面初始化对象的代码执行
// (2) 把父类构造函数原型上定义的反复进行拷贝。


// extends 关键字，继承了父类的所有属性和方法
// 子类必须在constructor 方法中 调用super 方法。 super 来调用父类的构造函数。  在子类的构造函数中， 只有调用super 之后， 才可以使用this 关键字，否则会报错！

class Person {
    constructor(name = '', age = 18) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log('this.name :', this.name);
        console.log('this.age :', this.age);
    }
}

class Student extends Person {
    constructor(name = '', age = 18, phone = '') {
        super(name, age);  // 继承： 必须调用super(), 而且在子类的构造函数内部 this之前 必须用super
        this.phone = phone;
    }
}

// 11. 继承内置的类型的构造函数   
class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
}

let m = new MyArray(3,5,9);
console.log('m:',m);  // m: MyArray [ 3, 5, 9 ]
// extends方法,以1当 10



