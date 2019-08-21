// 1.JavaScript 允许 采用\uxxxx 形式表示一个字在\u0000~ \uFFFF之间的字符

let x = '\u0061';
let y = '\u0062';
let z = '\u0063';
console.log('x:', x);
console.log('y:', y);
console.log('z:', z);
// x: a
// y: b
// z: c

// 2. 超出\u0000 ~\uFFFF 范围的字符， 必须用两个双字节的形式表示
let b = "\uD842\uDFB7";
console.log('b:', b); //b: 𠮷

let c = '\ud840\udce9'
console.log('c:', c);  //c: 𠃩

// 3. 还可以用花括号把码点包裹住

// 8. includes(), startWith(), endsWith()
let s = '123456';

console.log('s.includes("34"):', s.includes("34"));  // s.includes("34"): true
console.log('s.includes("30"):', s.includes("30"));// s.includes("30"): false

console.log('s.startsWith("1"):', s.startsWith("1")); //s.startsWith("1"): true
console.log('s.startsWith("2"):', s.startsWith("2")); // s.startsWith("2"): false

console.log('s.endsWith("56"):', s.endsWith("56"));  // s.endsWith("56"): true
console.log('s.endsWith("567")', s.endsWith("567")); // s.endsWith("567") false

// 这三个方法 都支持第2个参数， 表示开始搜索的索引的位置

console.log('s.includes("4",5):', s.includes("4", 5));  // s.includes("4",5): false


// 9.repeat() repeat 方法 返回一个新字符串， 表示将原字符串重复n次。

let m = 'aicoder.com ';  // 记得后面加上个空格

console.log('m.repeat(2) :', m.repeat(2)); // m.repeat(2): aicoder.comaicoder.com
console.log('m.repeat(0):', m.repeat(0));  // m.repeat(0):  
console.log('m.repeat(2.7):', m.repeat(2.7));  // m.repeat(2.7): aicoder.com aicoder.com 


// 10. padStart(), padEnd()
let k = '12';

console.log('k.padStart(5,"d"):', k.padStart(5, "d"));  // k.padStart(5,"d"): ddd12
const str = k.padStart(5, "d");
typeof (str);
console.log(typeof (str));  // string


console.log('k.padEnd(5,"d"):', k.padEnd(5, "d"));  //k.padEnd(5,"d"): 12ddd
console.log('k.padEnd(5,"d333qdsaasdad"):', k.padEnd(5, "d333qdsaasdad")); // k.padEnd(5,"d333qdsaasdad"): 12d33

let k = '12';
console.log('k.padStart(5,"ab"):', k.padStart(5, "ab")); // k.padStart(5,"ab"): aba12
console.log('k.padEnd(7,"ab"):', k.padEnd(7, "ab"));   // k.padEnd(7,"ab"):12ababa

// 11. 模板字符串基础  用反引号定义！

let s1 = `<div>
<h3> 你好<h3>
<p>这里是</p>
</div>`;
console.log('s1:', s1);
// s1: <div>
// <h3> 你好<h3>
// <p>这里是</p>
// </div>

// 输出参数值

// 有数据 放到 标签里面去 。 前端模板， 另外就用 字符串拼接
let [a1, a2] = [9, 10];
let tempStr = ' ';
tempStr += '<p>' + a1 + '</p>';
tempStr += '<p>' + a2 + '</p>';
console.log('tempStr:', tempStr);   // tempStr:  <p>9</p><p>10</p>

let s2 = `<p>${a1}</p>
<p>${a2}</p>`;
console.log('s2:', s2);
// s2: <p>9</p>
//     <p>10</p>

// 输出表达式计算结果
let [a1, a2] = [9, 10];
let s3 = `<p>${a1 * 2}</p>
<p>${a2}</p>`;
console.log('s3:', s3);
// s3: <p>18</p>
// <p>10</p>

// 函数调用
function add(a, b) {
    return a + b;
}
let [a1, a2] = [9, 10];
let s3 = `===> ${2 * add(a1, a2)}`;
console.log('s3:', s3);  // s3: ===>38

// 12. 模板字符串 高级

// 模板字符串嵌套
let t = `<ul>
${ [1, 2, 3, 4, 5].map((item) => {  
        return `<li>${item}</li>`;
}).join('')}
</ul>`;

[
    '<li>1</li>',
    '<li>2</li>',
    '<li>3</li>',
    '<li>4</li>',
    '<li>5</li>'
]

console.log('t:',t);
// t: <ul>
// <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
// </ul>


//  标签模板

let [a1, a2] = ['*', '%'];
function add() {
    console.log('argument[0]:', arguments[0]);
    console.log('arguments :', arguments);
    // argument[0]: [ 'a', '-', '==' ]
    //    arguments : [Arguments] { '0': [ 'a', '-', '==' ], '1': '*', '2': '%' }
}
 
add`a${a1}-${a2}==`;
 
let ary = [12,23,24,42,1];  
let res = ary.map(function (item,index,ary ) {  
    return item*10;  
})  

console.log(res);   // [ 120, 230, 240, 420, 10 ]
console.log(ary);  // [ 12, 23, 24, 42, 1 ] 