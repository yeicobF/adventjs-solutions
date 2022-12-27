import { countHours } from "@/challenges/2022/02"
import { expect, expectTypeOf, it } from "vitest"

const year = 2022
const holidays = ["01/06", "04/01", "12/25"] // formato MM/DD

it("return type", () => {
  expect(countHours(year, holidays)).toBeTypeOf("number")
})

it("countHours(2023, ['01/06', '04/01', '12/25'])", () => {
  expect(countHours(2023, ["01/06", "04/01", "12/25"])).toBe(4)
})

it("countHours(2022, ['01/06', '04/01', '12/25'])", () => {
  expect(countHours(2022, ["01/06", "04/01", "12/25"])).toBe(4)
})

it("countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])", () => {
  const overtimeHours = countHours(1985, [
    "01/01",
    "01/06",
    "02/02",
    "02/17",
    "02/28",
    "06/03",
    "12/06",
    "12/25",
  ])

  expect(overtimeHours).toBe(10)
})

it("countHours(2000, ['01/01'])", () => {
  expect(countHours(2000, ["01/01"])).toBe(0)
})
