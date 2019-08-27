//  定义父类 Animal
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(this.name, "-", this.age);
  }
}

// 定义子类 cat 
class Cat extends Animal {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  catShow(){
    console.log(this.name,"---",this.color);
  }
}

let c = new Cat();
c.show();
c.catShow();