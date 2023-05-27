import { changeQuantity } from "../src/changeQuantity.js"
import { dotsOrEmpty } from "../src/dotsOrEmptyOnText.js"
import { loadFinishBtn } from "../src/loadingFinishBtn.js"
import { getProductsValues, totalValue } from "../src/totalValue.js"

// declarations
const finishBtn = document.querySelector('#finish-btn')
const quantityButtons = document.querySelectorAll('.quantity-buttons button')

// events
document.addEventListener('DOMContentLoaded', () => {
  dotsOrEmpty()
  getProductsValues()
  totalValue()
})

quantityButtons.forEach(button => {
  button.addEventListener('click', () => {
    changeQuantity(button)
    getProductsValues()
    totalValue()
  })
})

finishBtn.addEventListener('click', (ev) => {
  loadFinishBtn(ev, finishBtn)
  setTimeout(() => {
    finishBtn.textContent = 'Finalizar compra'
  }, 4000);
})