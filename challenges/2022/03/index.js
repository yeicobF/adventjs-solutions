function distributeGifts(packOfGifts, reindeers) {
  const packOfGiftsWeigth = packOfGifts.reduce((accumulator, gift) => {
    return accumulator + gift.length
  }, 0)

  const maxWeight = reindeers.reduce((accumulator, reindeer) => {
    const reindeerMaxWeigth = reindeer.length * 2
    return accumulator + reindeerMaxWeigth
  }, 0)

  return Math.floor(maxWeight / packOfGiftsWeigth)
}
