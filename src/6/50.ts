export {}

interface Person {
  name: string
  age: number
}

/**
 * asdjflajsdlfadj
 * @template T 元のオブジェクト型
 * @template K 使用するキー、通常は文字列リテラル型のユニオン
 */
type MyPick<T, K> = { [P in K & PropertyKey]: T[P & keyof T] }
type AgeOnly = MyPick<Person, 'age'>

const pick = <T extends object, K extends keyof T>(
  obj: T,
  ...keys: K[]
): Pick<T, K> => {
  const picked: Partial<Pick<T, K>> = {}

  keys.forEach((key) => {
    picked[key] = obj[key]
  })
  return picked as Pick<T, K>
}

const p: Person = { name: 'Matilda', age: 5.5 }
const age = pick(p, 'age')
