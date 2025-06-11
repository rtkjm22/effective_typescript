export {}

type CylinderFn = (r: number, h: number) => number

const surfaceArea: CylinderFn = (r, h) => 2 * Math.PI * r * (r + h)
const valume: CylinderFn = (r, h) => Math.PI * r * r * h

const arr: Array<[number, number]> = [
  [1, 1],
  [1, 2],
  [2, 1],
]

arr.map(([r, h]) => {
  console.log(`cylinder:  r=${r} x h=${h}`)
  console.log(`surface area:  ${surfaceArea(r, h)}`)
  console.log(`valume:  ${valume(r, h)}`)
})

interface Vertebrate {
  weightGrams: number
  color: string
  isNocturnal: boolean
}

interface Bird extends Vertebrate {
  wingspanCm: number
}

interface Mammal extends Vertebrate {
  eatsGardenPlants: boolean
}

type hoge = 'hohgoehoge' | 'fugafugafauga'

type fuga = 'fasdfadsf' | hoge

interface State {
  userId: string
  pageTitle: string
  recentFiles: string
  pageContents: string
}

// interface TopnavState {
//   userId: State['userId']
// }

type TopNavState = {
  [K in 'userId']: State[K]
}
type Pick<T, K> = { [k in K]: T[k] }

interface Save {
  type: 'save'
}
interface Load {
  type: 'load'
}
type Action = Save | Load
type ActionType = Action['type']
type OtherType = Pick<Action, 'type'>

type Options = {
  width: number
  height: number
}

type OptionsUpdate<T> = {
  [K in keyof T]?: T[K]
}

class UIWidget {
  constructor(init: Options) {}
  update(options: OptionsUpdate<Options>) {

  }
}


type ShortToLong = {
  q: 'search',
  n: 'numberOfResult'
}

type LongToShort = {
  [k in keyof ShortToLong as ShortToLong[k]]: k
}