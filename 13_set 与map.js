// 1. Set 类型， 它类似于数组， 但是成员的值都是唯一的， 没有重复的值。

let s = new Set();
s.add(1);
s.add('1');
s.add(0);
s.add(1); // 无效 。 因为set集合中已经存在了 1
console.log('s.size :', s.size);
console.log('s :', s);

// 2. Set 函数可以接受一个数组(或者具有iterable 接口的其他数据结构) 作为参数， 用来初始化
// 接受一个 可遍历对象， 比如： 字符串， NodeList接口
let s = new Set([1, 2, 9, 1, 0]);
console.log('s :', s);   // s : Set { 1, 2, 9, 0 }

// Set 内部 判断两个值是否不同，使用的算法叫做 "Same-value-zero equality", 它类似于精确相等运算符(===) ,主要的区别是NaN 等于自身，

// 0 与 -0 相等

s.add(NaN);
s.add(NaN);
s.add(NaN);
s.add(NaN);
s.add(-0);
console.log('s :', s);  // s : Set { 1, 2, 9, 0, NaN }

// 3.Set.prototype.size: 返回Set 实例的成员总数。
// 4. Set 实例4个操作方法： 

let s = new Set([1, 9, 0]);
s.delete(0);
console.log('s :', s);  // s : Set { 1, 9 }

//  5. Set 结构转为数组

// 数组去重,展开运算符
let s = new Set();
s.add(1);
s.add(2);
s.add(3);

let arr = [...s];
console.log('arr :', arr);  //   arr : [ 1, 2, 3 ]

// Array.from 把一个可遍历的对象 转换成一个 真正的 数组

let arr2 = Array.from(s);
console.log('arr2 :', arr2);

// 6.Set 结构的实例有4个遍历方法
let s = new Set([1, 3, 55]);
// keys():  返回键名的遍历器
console.log('s.keys() :', s.keys());  // s.keys() : [Set Iterator] { 1, 3, 55 }

// values(): 返回键值的遍历器。 也可以直接遍历Set结构， 跟用values 效果一样

// entries(): 使用键值对的遍历器

// forEach():使用回调函数遍历每个成员
s.forEach((item, index, map) => {
    console.log('item :', item);
    console.log('index :', index);
});
// 7. WeakSet, WeakSet 对象允许接受一个数组或类似数组的对象作为参数

// WeakSet 中的对象都是被弱引用的， 如果没有其他变量 或属性引用 这个对象值， 则这个对象会被当成垃圾回收掉， 正因为

let ws = new WeakSet();
let a = {a:'222'};
let b = {b:'2222'};
ws.add(a);
ws.add(b);

ws.delete(a);
console.log(ws.has(b));  // true

a = null;

// WeakSet 是一个构造函数，可以使用new命令，创建 WeakSet 数据结构。

console.log('s.values() :', s.values());
WeakSet.prototype.add(value) // 向 WeakSet 实例添加一个新成员。
WeakSet.prototype.delete(value) // 清除 WeakSet 实例的指定成员。
WeakSet.prototype.has(value) // 返回一个布尔值，表示某个值是否在 WeakSet 实例之中。


// 8. Map 数据结构。 它类似于对象， 也是键值对 的集合， 但是“键” 的范围不限于字符串， 各种类型的值(b包括对象)都可以当做键。
let  map = new Map();
let a = {a:123};
let b = new Number(20000);

map.set(a,{age:19});
map.set(b,198);
map.set('2344',b);
console.log('map:',map);

// 9. 构建 Map 对象， 使用new 关键字， 可以传入可遍历的对象即可。

// Map 的属性和 操作方法

let map = new Map ([[{a: 19},2222],[2, 'abcd,aicoder.com']]);
// size属性返回Map 结构 的成员总数
console.log('map.size :', map.size);  // map.size : 2

console.log('map.values :', map.values);  // map.values : function values() { [native code] }
console.log('map.entries :', map.entries);  // map.entries : function entries() { [native code] }

map.forEach((item,key)=>{
    console.log('item :', item); // item : 2222      item : abcd,aicoder.com
    console.log('key :', key);  // key : { a: 19 }    key : 2
});

// 11. WeakMap 结构 与Map 结构 类似， 也是用于生成键值对的集合。
let wm = new Map();

wm.set(dom,{age:19});










