export {}

interface Book {
  name: string
  author: string
}

const parseYAML = (str: string): unknown => {
  return str
}

const book = parseYAML(`
  name: Jane,
  author: Charlotte Bronte
`) as Book

console.log(book.name)
console.log(book.hoge)

interface Feature {
  id?: string | number
  geometry: Geometry
  properties: unknown
}

const isSmallArray = (arr: readonly unknown[]): boolean => {
  return arr.length < 10
}

console.log(isSmallArray([20, 10, 3]))

const isBook = (value: unknown): value is Book => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'name' in value &&
    'author' in value
  )
}

const processValue = (value: unknown) => {
  if (isBook(value)) return value
  if (value instanceof Date) return value
  if (value instanceof Number) return value
}


Object.assign