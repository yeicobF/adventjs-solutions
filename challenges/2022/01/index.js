export function wrapping(gifts) {
  const wrapGifts = (gift) => {
    const outerWrapperLength = gift.length + 2
    const outerWrapper = "*".repeat(outerWrapperLength)

    return [outerWrapper, `*${gift}*`, outerWrapper].join("\n")
  }

  return gifts.map(wrapGifts)
}
