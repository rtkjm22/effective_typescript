export {}

interface LngLat {
  lng: number
  lat: number
}
type LngLatLike = LngLat | { lon: number; lat: number } | [number, number]

interface Camera {
  center: LngLat
  zoom: number
  bearing: number
  pitch: number
}

interface CameraOptions extends Omit<Partial<Camera>, 'center'> {
  center?: LngLatLike
}

type LngLatBounds =
  | { northeast: LngLatLike; southwest: LngLatLike }
  | [LngLatLike, LngLatLike]
  | [number, number, number, number]

declare function setCamera(camera: CameraOptions): void
declare function viewportForBounds(bounds: LngLatBounds): Camera

function* range(limit: number) {
  for (let i = 0; i < limit; i++) {
    yield i
  }
}

const sum = (xs: Iterable<number>): number => {
  let sum = 0
  for (const x of xs) {
    sum += x
  }
  return sum
}
const arr = [1, 3, 4]
const hoge = sum(arr)
const genHoge = sum(range(10))
