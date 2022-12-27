export function countHours(year, holidays) {
  /** 0: Domingo, 6: Sábado */
  const weekendDays = [0, 6]

  const isWeekendDay = (date) => {
    return weekendDays.some((day) => day === date.getDay())
  }

  const countWeekDays = (accumulator, currentDay) => {
    const date = new Date(`${year}/${currentDay}`)

    const sum = isWeekendDay(date) ? 0 : 2
    return accumulator + sum
  }

  return holidays.reduce(countWeekDays, 0)
}
