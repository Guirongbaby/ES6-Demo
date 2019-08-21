function add(a,b = 1){
  return a+ b;
}
console.log('add(1) :',add(1));//2
console.log('add(1,undefined) :',add(1,undefined));//2



let x = 1;
function add(a,b = x){
  return a+ b;
}
console.log('add(1) :',add(1));  //2
x +=1;
console.log('add(1) :',add(1));  //3


