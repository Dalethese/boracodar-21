export function changeQuantity(button) {
  let minusBtn, plusBtn;
  const textQuantityEl = button.parentElement.querySelector('.text-quantity')
  let textQuantityContent = +textQuantityEl.textContent

  if (button.classList.contains('minus-btn')) {
    minusBtn = button
    textQuantityContent = textQuantityContent > 0 ? textQuantityContent - 1 : textQuantityContent
  } else if(button.classList.contains('plus-btn')) {
    plusBtn = button
    textQuantityContent = textQuantityContent  + 1
  }

  textQuantityEl.innerText = textQuantityContent
}