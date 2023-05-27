export const formatter = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
  currencyDisplay: 'narrowSymbol'
})

export let virtualProducts = []

export function totalValue() {   
  const totalValueEl = document.querySelector('.total-value')

  const sumValues = virtualProducts.reduce((acc, product) => acc + (product.value * product.quantity), 0)
  
  totalValueEl.innerText = formatter.format(sumValues.toFixed(2))
}

export function getProductsValues() {
  const productsValueEl = document.querySelectorAll('.product-value')
  virtualProducts = []

  productsValueEl.forEach(productValueP => {
    
    const productValue = +productValueP.textContent
    const currentParent = productValueP.parentElement
    const currentQuantity = +currentParent.querySelector('.quantity-buttons .text-quantity').textContent

    const product = {
      value: productValue,
      quantity: currentQuantity
    }

    virtualProducts.push(product)
  }) 
}