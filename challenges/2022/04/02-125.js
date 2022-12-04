// - Puntos: 125
// - 1282 ops/s
// - Complejidad ciclomática: 1
// - Mantenibilidad: 134%
function fitsInOneBox(boxes) {
  const orderedBoxes = boxes.sort((a, b) => a.l - b.l)

  const results = orderedBoxes.slice(1).map((currentBox, index) => {
    const previousBox = orderedBoxes[index]
    console.log({ previousBox })
    return Object.entries(currentBox).every(
      ([key, value]) => value > previousBox[key],
    )
  })

  return results.every((result) => result === true)
}

const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 },
]

const result = fitsInOneBox(boxes)

console.log({ result })
