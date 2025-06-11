export {}

let y = 'y'
const x = 'x'

// y = /x|y/

let vec = { x: 10, y: 20, z: 30 }

type Vector3D = {
  x: number
  y: number
  z: number
}
const getComponent = (vector: Vector3D, asis: 'x' | 'y' | 'z') => {
  return vector[asis]
}

getComponent(vec, x)

const arr1 = {
  x: 1,
  y: 2,
}
const arr2 = {
  x: 1 as const,
  y: 2,
}
const arr3 = {
  x: 1,
  y: 2,
} as const

const tuple = <T extends unknown[]>(...elements: T) => elements

const arr4 = tuple([1, 2, 3, '4'])



type Point = [number, number]

const capitals1 = {ny: [111, 222], ca: [111, 222]}
const capitals2 = {ny: [111, 222], ca: [111, 222]} satisfies Record<string, Point>

type Color = {
  primary: '#00f',
  secondary: '#0f0',
  danger: '#f00',
}

const colors = {
  primary: '#00f',
  secondary: '#0f0',
  danger: '#f00',
} satisfies Record<string, string>
const colors2 = {
  primary: '#00f',
  secondary: '#0f0',
  danger: '#f00',
} as Record<string, string>
const colors3 = {
  primary: '#00f',
  secondary: '#0f0',
  danger: '#f00',
} as const
const obj = {
  primary: '#00f',
  secondary: '#0f0',
  danger: '#f00',
} satisfies Color
const piyo = obj


const capitsl = {
  ny: [111,  222]
} satisfies Record<string, Point>


type Theme = {
  primary: string
  secondary: string
  danger: string
}

const theme = {
  primary: '#00f',
  secondar: '#0f0',
  danger: '#f00',
} satisfies Theme


const roles = {
  admin: 'admin',
  user: 'user',
  guest: 'guest',
} satisfies Record<string, string>

type Role = typeof roles[keyof typeof roles]
// → 'admin' | 'user' | 'guest'