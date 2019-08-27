// import {
//   resolve
// } from "dns";
// import {
//   rejects
// } from "assert";

  // 封装jQuery 的 ajax 请求 
//  这个代码是放在我们api.js 里边的 （service 层 的 ）！
// 这个是最早期的回调函数法 
function getUser(cb){
  $.ajax({
    url:'/api/usr',
    type:'GET',
    data:"",
    success:cb
  });
}
function getUser(cb) {
  // new promise  的时候 会立即执行回调函数
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/api/usr',
      type: 'GET',
      data: "",
      success: function (data) {
        resolve(data);
      },
      error:function(e){
        reject(e);
      }
    });
  });
}
let api = { getUser};
//  做成一个promise对象 
//  在 javascript 当中处理异步的都用回调函数的写法

//   这是 promise  方法
api.getUser().then(res=>{
  console.log("res:",res); 
});


//   这个最新的解决方案：
async function getUserAsync() {
  // new promise  的时候 会立即执行回调函数
  return new Promise((resolve, reject) => {
    $.ajax({
      url: '/api/usr',
      type: 'GET',
      data: "",
      success: function (data) {
        resolve(data);
      },
      error: function (e) {
        reject(e);
      }
    });
  });
}

//  这是 自执行函数 加上 async 之后就是 async 函数了 
(async () => { 
  let k = await getUserAsync();
  console.log("k:", k);
})();