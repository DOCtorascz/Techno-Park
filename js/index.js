const bodyContent = document.querySelector('body');
const popupBurger = document.querySelector('.burger-menu');
const popupBuy = document.querySelector('.order');
let popupInit = "";

const popupStatusMenu = (event) => {
  event.preventDefault();

  const eventBtnClass = event.target.closest('button').className;
  const [burgerMenu, buyMenu] = ["header__menu-burger-btn", "shop__buy-btn"];

  const animationParametr = 'popupVisibl 1s forwards';

  if (eventBtnClass === burgerMenu || eventBtnClass === buyMenu) {
    bodyContent.style.overflow = 'hidden';
  } 
  
  if (eventBtnClass === burgerMenu) {
    popupBurger.style.animation = animationParametr;
    popupInit = popupBurger;
  } else if (eventBtnClass === buyMenu) {
    popupBuy.style.animation = animationParametr;
    popupInit = popupBuy;
  } else {
    popupCloseMenu(popupInit);
  }
}

const popupCloseMenu = (popup) => {
  bodyContent.style.overflow = 'auto';
  popup.style.animation = 'false';
}


const btnBurger = document.querySelector('.header__menu-burger-btn');
const btnCloseBurger = document.querySelector('.burger-menu__btn');
const btnBuy = document.querySelector('.shop__buy-btn');
const btnBuyClose = document.querySelector('.order__close-btn');

btnBuy.addEventListener('click', popupStatusMenu);
btnBurger.addEventListener('click', popupStatusMenu);
btnCloseBurger.addEventListener('click', popupStatusMenu);
btnBuyClose.addEventListener('click', popupStatusMenu)