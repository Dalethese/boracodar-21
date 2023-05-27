export function divLoad() {
  const divLoadIcon = document.createElement('div')
  divLoadIcon.id = 'load-div'
  divLoadIcon.style.display = 'inline-block'
  divLoadIcon.style.textAlign = 'center'
  divLoadIcon.style.animation = 'loading 2s linear 4'
  
  return divLoadIcon
}