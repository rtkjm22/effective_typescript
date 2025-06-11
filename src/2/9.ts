export {}
const hoge = <'piyo'>'piyo'
const fuga = 'fuga' as 'fuga' extends string ? string : never

type Person = { name: string }

// const people = ['alice', 'bob', 'jan'].map((name) => ({ name }))
// const people = ['alice', 'bob', 'jan'].map((name) => ({ name }) as Person)

const people: Person[] = ['alice', 'bob', 'jan'].map(name => ({name}))
