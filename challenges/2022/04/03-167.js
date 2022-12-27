// - Puntos: 167
// - 2261 ops/s
// - Complejidad ciclomática: 1
// - Mantenibilidad: 157%
export function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .map((currentBox, index, sortedBoxes) => {
      if (index === 0) return true

      const previousBox = sortedBoxes[index - 1]
      return Object.entries(currentBox).every(
        ([key, value]) => value > previousBox[key],
      )
    })
    .every((result) => Boolean(result))
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]

const result = fitsInOneBox(boxes)

console.log({ result })
