interface Vector2D {
  x: number
  y: number
}

function calculateLength(v: Vector2D) {
  console.log(Math.sqrt(v.x ** 2 + v.y ** 2))
  return Math.sqrt(v.x ** 2 + v.y ** 2)
}

interface NamedVector extends Vector2D {
  name: string
}

const v: NamedVector = { x: 3, y: 4, name: 'Pythagoras' }

calculateLength(v)

export {}
interface Vector3D {
  x: number
  y: number
  z: number
}

function normalize(v: Vector3D) {
  const length = calculateLength(v)
  return {
    x: v.x / length,
    y: v.y / length,
    z: v.z / length,
  }
}

console.log(normalize({ x: 3, y: 4, z: 5 }))
