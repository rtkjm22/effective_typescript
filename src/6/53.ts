export {}

// type NTuple<T, N extends number> = NTupleHelp<T, N, []>
type NTuple<T, N extends number> = N extends number
  ? NTupleHelp<T, N, []>
  : never

type NTupleHelp<T, N extends number, Acc extends T[]> = Acc['length'] extends N
  ? Acc
  : NTupleHelp<T, N, [T, ...Acc]>

type hoge = NTuple<string, 2>
type fuga = NTuple<string, 5>
type piyo = NTuple<string, 2 | 3>
