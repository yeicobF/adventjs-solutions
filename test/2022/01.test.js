import { wrapping } from "@/challenges/2022/01"
import { expect, expectTypeOf, it } from "vitest"

const exampleGifts = ["cat", "game", "socks"]

it("return type", () => {
  // https://vitest.dev/guide/testing-types.html
  expect(wrapping([])).toBeTypeOf("object")
})

it("wrapping(exampleGifts)", () => {
  // https://vitest.dev/api/#toequal
  // https://vitest.dev/api/#tostrictequal
  expect(wrapping(exampleGifts)).toStrictEqual([
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******",
  ])
})

it("wrapping(['midu']", () => {
  expect(wrapping(["midu"])).toStrictEqual(["******\n*midu*\n******"])
})

it("wrapping(['a']", () => {
  expect(wrapping(["a"])).toStrictEqual(["***\n*a*\n***"])
})

it("wrapping an empty array should return an empty array", () => {
  expect(wrapping([])).toStrictEqual([])
})
