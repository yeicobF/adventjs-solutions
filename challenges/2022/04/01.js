// 99 puntos
// - 1573 ops/s
// - Complejidad ciclomática: 1
// - Mantenibilidad: 121%
function fitsInOneBox(boxes) {
  const orderedBoxes = boxes.sort((a, b) => a.l - b.l)

  const results = orderedBoxes.slice(1).reduce(
    (accumulator, currentBox) => {
      const { previousBox, previousResults } = accumulator

      const fitsInPreviousBox = Object.entries(currentBox).every(
        ([key, value]) => value > previousBox[key],
      )

      return {
        previousBox: currentBox,
        previousResults: [...previousResults, fitsInPreviousBox],
      }
    },
    {
      previousBox: orderedBoxes[0],
      previousResults: [],
    },
  )

  return results.previousResults.every((result) => result === true)
}

// const result = fitsInOneBox([
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
// ]) // true

// const result = fitsInOneBox([
//   { l: 1, w: 1, h: 1 },
//   { l: 2, w: 2, h: 2 },
//   { l: 3, w: 1, h: 3 },
// ]) // false

// const result = fitsInOneBox([
//   { l: 1, w: 1, h: 1 },
//   { l: 3, w: 3, h: 3 },
//   { l: 2, w: 2, h: 2 },
// ]) // true

// const result = fitsInOneBox([
// { l: 1, w: 1, h: 1 },
// { l: 3, w: 3, h: 3 },
// { l: 2, w: 2, h: 2 },
// ]) // true

const result = fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 },
]) // false

console.log({ result })
