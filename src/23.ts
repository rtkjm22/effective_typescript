export {}

interface Coordinate {
  x: number
  y: number
}

interface BoundingBox {
  x: [number, number]
  y: [number, number]
}

interface Polygon {
  exterior: Coordinate[]
  holes: Coordinate[][]
  bbox?: BoundingBox
}

const isPointInPolygon = (polygon: Polygon, pt: Coordinate) => {
  if (polygon.bbox) {
    if (
      pt.x < polygon.bbox.x[0] ||
      pt.x > polygon.bbox.x[1] ||
      pt.y < polygon.bbox.y[0] ||
      pt.y > polygon.bbox.y[1]
    ) {
      return false
    }
  }
  return
}

const isPointInPolygon2 = (polygon: Polygon, pt: Coordinate) => {
  const box = polygon.bbox
  if (polygon.bbox) {
    if (
      pt.x < box.x[0] ||
      pt.x > box.x[1] ||
      pt.y < box.y[0] ||
      pt.y > box.y[1]
    ) {
      return false
    }
  }
  return
}
