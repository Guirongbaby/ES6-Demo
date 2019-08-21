export let age = 19;
export let name = 'aicoder';
export function AddAge(num) {
    age += num;
}

export function show() {
    console.log('a :', a);
    console.log('b :', b);
    console.log('c :', c);
    console.log('age :', age);
    console.log('name :', name);
}
export let [a, b, c] = [1, 2, 3];

let k = 10;
export default k;  // 只有default  的时候 ， 后面才可以跟变量的名字