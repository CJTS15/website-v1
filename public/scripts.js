// Responsive Menu Nav

const switchMenu = document.querySelector('#switch_menu');
const list = document.querySelector('#menuList');

function toggleMenu () {
    switchMenu.name === 'menu' ? 
    (switchMenu.name = "close" ,list.classList.add('top-[80px]', 'bg-transparent', 'md:bg-transparent', 'bg-gray-200', 'dark:bg-custom-bg-dark')) 
    :(switchMenu.name = "menu" ,list.classList.remove('top-[80px]', 'bg-transparent', 'md:bg-transparent', 'bg-gray-200', 'dark:bg-custom-bg-dark'))
}

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Auto Update Year

const date = new Date();
let year = date.getFullYear();

document.getElementById("year").innerHTML = '| &nbsp;' + year + '&nbsp; |';