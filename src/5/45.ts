// export const generateArray = <T>(
//   generatorFn: () => Generator<T, void>
// ): T[] => {
//   return Array.from(generatorFn())
// }

// const nums = generateArray<number>(function* () {
//   yield 1
//   yield* [2, 3]
// })

// function take<T>(iter: Iterable<T>, limit: number): T[] {
//   const result: T[] = []
//   const iterator = iter[Symbol.iterator]()
//   for (let i = 0; i < limit; i++) {
//     const next = iterator.next()
//     if (next.done) break
//     result.push(next.value)
//   }
//   return result
// }
export const take = <T>(iter: Iterable<T>, limit: number): T[] => {
  const iterator = iter[Symbol.iterator]()

  const recur = (acc: T[], i: number): T[] =>
    i >= limit
      ? acc
      : (() => {
          const { done, value } = iterator.next()
          return done ? acc : recur([...acc, value], i + 1)
        })()

  return recur([], 0)
}


function* infinite() {
  let i = 0
  while (true) yield i++
}

const first = take(infinite(), 10)
console.log(first)
