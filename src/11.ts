export {}
interface Room {
  numDoors: number
  ceilingHeightFt: number
}

const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
}
const obj2 = {
  numDoors: 1,
  elephant: 'present',
}

const r: Room = { ...obj }
const t: Room = obj2
const s: Room = {
  numDoors: 1,
  ceilingHeightFt: 0,
  elephant: 'present',
}

// interface Options {
//   title: string
//   darkMode?: boolean
// }

const createWindow = (options: Options) => {
  if (options.darkMode) {
    return
  }
}

createWindow({
  title: 'spider',
  darkmode: true,
})

interface Options {
  darkMode?: boolean
  [otherOptions: string]: unknown
}

const o: Options = { darkMode: true }
