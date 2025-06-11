export {}

declare function f(): number | string
const f1: () => number | string | boolean = f
const f2: () => number = f

// class Parent {
//   foo(x: number | string) {}
//   bar(x: number) {}
// }

// class Child extends Parent {
//   override foo(x: number) {}
//   override bar(x: number | string) {}
// }
class Parent {
  foo = (x: number | string) => {}
  bar = (x: number) => {}
}

class Child extends Parent {
  override foo = (x: number) => {}
  override bar = (x: number | string) => {}
}


interface Person {
  name: string
}
interface PossiblyAgedPerson extends Person {
  age?: number
}

const p1 = {name: 'serena', age: '42 years'}
const p2: Person = p1
const p3: PossiblyAgedPerson = p2