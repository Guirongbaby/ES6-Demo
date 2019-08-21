let p = new Promise((resolve, reject) => {
    console.log('开始执行:', Promise代码);
    setTimeout(() => {
        resolve(123);
        // 处理事件任务， 如果成功后， 直接调用resolve方法
        //放处理逻辑的代码
    }, 1000);
});
p.then(data => {
    console.log('data :', data);
}).catch(error => console.log('error:', error)
);
console.log('Over！');
