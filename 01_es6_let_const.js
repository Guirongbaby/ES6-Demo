// // {
// //     var a = 10;
// //     console.log(a);// =>10

// // }

// // console.log(a);// a => 10

// // 变量提升 和函数提升
// fun();
// function fun() {
//     console.log(a);

//     var a = 90;
//     console.log(a);
// }


// // Let 和 const
// // 1.let: 变量, 有块级的 作用域
// {
//     let b = 100;
//     console.log(b);  // 
// }

// // 2. let 声明变量， 没有变量提升， 而且有暂时性死区
//     let b = 'aicoder.com';
//     console.log(b);

// // 3. 配合for 循环可以解决我之前的
// for (var i = 0; i < 10; i++) {
//     setTimeout(()=> {
//         console.log(i);
//     }, 4);
// }


// // 闭包解决方法
// for(var i = 0 ;i < 10;i++){
//     (function(index){
//         setTimeout(()=>{
//             console.log(index);
//         },4);
//     })(i)
// }

// for(let i = 0 ; i < 10; i++){
//     setTimeout(()=>{
//         console.log(i);
//     },4);
// }

// // 4. let 不能重复声明变量 

// let a = 10;
// let a = "aicoder.com";

// // 5. let 声明的变量 不会添加到全局对象上去
// var a = 10;
// console.log(window.a);

// let b=11;
// console.log(window.b);


// var reg = /([a-z])\1\1/g
// var str = "kadfhajhsdfjhajzz";
// console.log(str.match(reg))

// export function Show(){
//     console.log("show");
// }
// export let k = {
//     kk:123
// };


