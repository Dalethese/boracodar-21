import { formatter } from "./totalValue.js";

export function productValue() {
  const productsValueEl = document.querySelectorAll('.product-value')

  productsValueEl.forEach(productValueP => {
    const currentParent = productValueP.parentElement
    const productValue = productValueP.textContent
    const currentQuantity = currentParent.querySelector('.quantity-buttons .text-quantity')
    
    const formattedProductValue = formatter.format(productValue)
    productValueP.innerText = formattedProductValue
  })
}