// export function getHummer(): Hummingbird {
//   interface Hummingbird {
//     name: string
//     weightGrams: number
//   }

//   const bee: Hummingbird = {name: 'bee', weightGrams: 2.5}
//   return bee
// }

// getHummer()

type  hoge = Readonly<number[]> 
type other  = readonly number[]

export {}

const  printTriangle = (n: number) => {
  const numbers = []
  for (let i = 0; i < n; i++) {
    numbers.push(i)
    console.log(arraySum(numbers as hoge))
  }
}

// function arraySum(arr: other) {
//   let sum = 0, num;
//   while ((num = arr.pop()) !== undefined) {
//     sum += num 
//   }

//   return sum
// }


function arraySum(arr: readonly number[]) {
  let sum = 0
  for (const num of arr) {
    sum += num
  }
  return sum
}

printTriangle(5)


let piyo : readonly number[] = [0]


piyo[1] = 20

console.log(piyo)