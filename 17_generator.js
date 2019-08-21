function* G1() {
    yield 1;
    yield 2;
    yield 3;
}

let t = {
    [Symbol.iterator]() {
        return G1();
    }
}
for (let k of t) {
    console.log('k :', k);
}

// 6. for...of循环
function* G1() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

function* Add() {
    let a1 = yield 1;   // {value:1, done: false}
    let a2 = yield 2;
    let a3 = yield 3;
    console.log('a1 :', a1);
    console.log('a2 :', a2);
    console.log('a3 :', a3);
}
// g.next() : { value: 1, done: false }
// g.next(33333) : { value: 2, done: false }
// g.next(44444) : { value: 3, done: false }

let g = Add();  // 返回一个遍历器
console.log('g.next() :', g.next());  // {value:1, done: false}
console.log('g.next(33333) :', g.next(33333));
console.log('g.next(44444) :', g.next(44444));
console.log('g.next(5555) :', g.next(5555));
// a1 : 33333
// a2 : 44444
// a3 : 5555
// g.next(5555) : { value: undefined, done: true }

// 8. Generator.prototype.return()

function* G2() {
    yield 'abcd';
    yield 3;
    yield 4;
}

let k = G2();
console.log(k.next());
console.log('k.return("999") :', k.return("999"));


// 9.yield* 表达式
// 如果在Generator 函数内部， 调用另一个 Generator 函数
function* G2() {
    yield 'abcd';
    yield 3;
    yield 4;
}
function* G3() {
    yield 1;
    yield 2;
    for (let k of G2()) {
        yield k;
    }
    yield 5;
}

for (let k of G3()) {
    console.log('k :', k);
}

// k : 1
// k : 2
// k : abcd
// k : 3
// k : 4
// k : 5

function* G4(){
    yield 1;
    yield* [2,3,4,5];
    yield*'aicoder.com';
    yield 9;
}
for (let k of G4()){
    console.log('k :', k);
}

// 10. 作为对象属性的Generator 函数
let m = {
    *G5(){
        yield[1,2,3,4]
    }
}

// k : 1
// k : 2
// k : 3
// k : 4
// k : 5
// k : a
// k : i
// k : c
// k : o
// k : d
// k : e
// k : r
// k : .
// k : c
// k : o
// k : m
// k : 9

let k = G2();
console.log(k.next());







