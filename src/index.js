/* 继承 */
// 父类
class People {
  constructor(name, age) { // 需要判断 传入了 name， age
    this.name = name
    this.age = age
  }

  eat() {
    console.log(`${this.name} eat something`)
  }

  speak() {
    console.log(`My name is ${this.name}, age ${this.age}`)
  }
}

// 子类 继承父类
class Student extends People {
  constructor(name, age, number) {
    super(name, age)
    this.number = number
  }

  study() {
    console.log(`${this.name} study`)
  }
}

let xiaomi = new Student('xiaomi', 10, 'A1')
xiaomi.study()
console.log(xiaomi.number)

let xiaowu = new Student('xiaowu', 11, 'A2')
xiaowu.study()
xiaowu.speak()


/* 多态 */
class Person {
  constructor(name) {
    this.name = name
  }

  saySomething() {

  }
}

class A extends Person {
  constructor(name) {
    super(name)
  }

  saySomething() {
    console.log('I am A')
  }
}

class B extends Person {
  constructor(name) {
    super(name)
  }

  saySomething() {
    console.log('I am B')
  }
}

let a = new A('a')
a.saySomething()
let b = new B('b')
b.saySomething()
