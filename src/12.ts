export {}
interface Hoge {
  name: string
}

const hoge = new Array()

type Piyo = {
  animal: 'shark'
}
interface Hoge extends Piyo {
  email: string
}

interface Boke {
  name: string | number
}


interface Person {
  name: string
  age: string
}

interface IPerson extends Person {
  age: number
}