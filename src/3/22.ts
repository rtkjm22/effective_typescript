export {}

const strOrNum = [0, '1', 2, '3']

const isNumber = (v: string | number) => {
  return typeof v === 'number'
}

const stringArr = strOrNum
  .filter((v) => typeof v === 'number')
  .map((v) => v.toFixed())



const nameToNickname = new Map<string, string>()

let yourName: string
let nameToUse: string

yourName = 'ほげほげ'

if (nameToNickname.has(yourName)) {
  nameToUse = nameToNickname.get(yourName)
} else {
  nameToUse = yourName
}

// ↓

const nickname = nameToNickname.get(yourName)
if (nickname !== undefined) {
  nameToUse = nickname
} else {
  nameToUse = yourName
}

// ↓

const nickname = nameToNickname.get(yourName) ?? yourName