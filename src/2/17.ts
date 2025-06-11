
export {}

const tupleLike : Array<string> = ["1", '2']

const hoge = Iterable<string> = []

type User = {
  id: number;
  name: string;
  email: string
}
type ReadonlyUser = {
  readonly id: number;
  readonly name: string;
}

type UserRequireId = {
  readonly id: number;
  readonly name: string;
  readonly email: string;
}



type RequireId<T extends { id: unknown }> = {
  id: T['id']
} & {
  [K in Exclude<keyof T, 'id'>]?: T[K]
}


const user1: RequireId<User> = {
  id: 1
} // OK！ nameやemailは省略可能

const user2: RequireId<User> = {
  id: 2,
  name: '田中'
} // OK！ emailは省略可能

const user3: RequireId<User> = {
  name: '田中',
  email: 'hogehoge@example.com'
} // NG！ idは省略不可
