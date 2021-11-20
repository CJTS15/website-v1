const switchToggle = document.querySelector('#switch-toggle');
const html = document.querySelector('html');
let isDarkmode = false
const localDarkmode = JSON.parse(localStorage.getItem('isDarkmode'))

if (localDarkmode) {
  isDarkmode = localDarkmode
  html.classList.add('dark')
} else {
  html.classList.remove('dark')
}

function toggleDark (){
  isDarkmode = !isDarkmode
  localStorage.setItem('isDarkmode', isDarkmode)
  switchTheme()
}

function switchTheme (){
  if (isDarkmode) {
    html.classList.add('dark')
    setTimeout(() => {
      switchToggle.innerHTML = darkIcon
    }, 250);
  } else {
    html.classList.remove('dark')
    setTimeout(() => {
      switchToggle.innerHTML = lightIcon
    }, 250);
  }
}

switchTheme()