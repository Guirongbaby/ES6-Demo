// Math对象扩展
//  1.1   指数运算符**

// 2 的3 次方
console.log('Math.pow(2,3):', Math.pow(2, 3));   // Math.pow(2,3): 8

console.log('2**3:', 2 ** 3);  // 2**3: 8  
console.log('3**3:', 3 ** 3);  // 27

// 2.Math.trunc 方法 用于去除一个数的小数部分， 返回整数部分
//  类似于 floor  和 ceil 


console.log('Math.trunc(NaN):',Math.trunc(NaN));
console.log('Math.trunc("aa"):',Math.trunc("aa"));

// 3.3  判断数字的符号 Math.sign()

// Math.sign 方法用来判断一个数到底是正数  负数  还是零 对于非数值， 会先将其转换为数值。 
//  它会返回5种值

// 参数为正数, 返回+1;
// 参数为负数,返回-1;
// 参数为0, 返回0;
// 参数为-0,返回-0;
// 其他值， 返回NaN.

console.log('Math.sign(2):',Math.sign(2));  // Math.sign(2): 1
console.log('Math.sign(-1) :', Math.sign(-1));
console.log('Math.sign(-0) :', Math.sign(-0));
console.log('Math.sign(0) :', Math.sign(0));
console.log('Math.sign("sss") :', Math.sign("sss"));

// 3.4 Math.cbrt 方法用于计算一个数的立方根
// 对于非数值， Math.cbrt方法内部也是先使用Number 方法 将其转为数值

console.log('Math.cbrt(8):',Math.cbrt(8)); 
 // Math.cbrt(8): 2

//3.5  Math.hypot 方法 返回所有参数 的平方和的 平方根。 根下a^2 + b^2, 勾股定理

console.log('Math.hypot(3,4) :', Math.hypot(3,4)); 
 // Math.hypot(3,4) : 5


// 3.6 Math.log10(x) 返回以10为底的x 的对数， 如果x小于0， 则返回NaN。 


//3.7 Math.log2(x) 返回以2 为底的x 的对数， 如果x小于 0， 则返回NaN.

    


// 3.6 Math.expm1(),  Math.expm1(x) 返回ex -1, 即Math.exp(x) - 1.

