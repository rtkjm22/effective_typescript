export {}
const add = (a: number, b: number) => {
  return a + b
}

class Square {
  width: number
  constructor(width: number) {
    this.width = width
  }
}

class Rectangle extends Square {
  height: number
  constructor(width: number, height: number) {
    super(width)
    this.height = height
  }
}

type Shape = Square | Rectangle

const calc = (shape: Shape): number => {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height
  } else {
    return shape.width * shape.width
  }
}

function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: any, b: any): any {
  return a + b
}
