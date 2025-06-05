export function getHummer(): Hummingbird {
  interface Hummingbird {
    name: string
    weightGrams: number
  }

  const bee: Hummingbird = {name: 'bee', weightGrams: 2.5}
  return bee
}

getHummer()