import { distributeGifts } from "@/challenges/2022/03"
import { assertType, expect, expectTypeOf, it } from "vitest"

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// it("return type", () => {
//   const distributedGifts = distributeGifts(packOfGifts, reindeers)
//   console.log({ distributedGifts })
//   expectTypeOf(distributedGifts).toEqualTypeOf<number>()
// })

it("return type", () => {
  const distributedGifts = distributeGifts(packOfGifts, reindeers)
  // https://vitest.dev/guide/testing-types.html
  expect(distributedGifts).toBeTypeOf("number")
})

it("distributeGifts(packOfGifts, reindeers)", () => {
  expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
})
