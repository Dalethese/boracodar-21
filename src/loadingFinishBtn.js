import { divLoad } from "./DivLoad.js"

export function loadFinishBtn(ev, finishBtn) {
  finishBtn.innerText = ''
  const divLoadIcon = divLoad()
  
  const loadIcon = document.createElement('i')
  loadIcon.classList.add('ph', 'ph-spinner-gap')
  loadIcon.style.fontSize = '1.4em'

  divLoadIcon.appendChild(loadIcon)
  finishBtn.append(divLoadIcon)
}