export {}


declare function double<T extends string | number>(
  x: T
): T extends string ? string : number

const num = double(12)
const str = double('str')
