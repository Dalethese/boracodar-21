export function dotsOrEmpty() {
  const descriptionCardsElements = document.querySelectorAll('.content p')
  const limit = 25

  for (let p of descriptionCardsElements) {
    const aboveLimit = p.innerText.length > limit
    const dotOrEmpty = aboveLimit ? '...' : ''

    p.innerText = p.innerText.substring(0, limit) + dotOrEmpty
  }
}