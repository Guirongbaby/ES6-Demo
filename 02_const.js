// const 声明的变量有暂时性死区

{
  console.log(a);
  const a = 'sicoissjd';
  console.log(a);

}

// 3  const 与复杂类型
const stu = {};// 要求指向 的内存地址不能修改
 stu.age = 20;
 