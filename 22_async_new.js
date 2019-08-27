import { Script } from "vm";

 // async 修饰的函数， 返回值是一个promise ，如果return  不是一个promise 对象 ， 那么会封装成一个 promise 再返回 
 async function add(a, b) {
   return a + b;
 }

 //  let k = add(8, 9);
 //  k.then(res => {
 //    console.log("res:", res); // res: 17
 //  });

 (async () => {
   let k = await add(8, 9);
   console.log("k:", k); // k: 17
 })();


 // await
 // 1. 只能出现在 async 函数里边，
 // 2. 后面跟一个promise 对象， （如果不是， 立即包装成promise 对象）
 // 3.await  会暂停当前函数执行， 把执行控制权让出， 继续其他的代码执行
 // 4. 当await 后面的promise 发生状态改变， 自动回来 继续执行， 而且会把promise 的 结果作为当表达式的结果返回

