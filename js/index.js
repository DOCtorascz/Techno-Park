const bodyContent = document.querySelector('body');
const popupBurger = document.querySelector('.burger-menu');
const popupBuy = document.querySelector('.order');

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
  } else if (eventBtnClass === buyMenu) {
    popupBuy.style.animation = animationParametr;
  } else {
    popupCloseMenu();
  }
}

const popupCloseMenu = () => {
  bodyContent.style.overflow = 'auto';
  popupBurger.style.animation = 'false';
  popupBuy.style.animation = 'false';
}


const btnBurger = document.querySelector('.header__menu-burger-btn');
const btnCloseBurger = document.querySelector('.burger-menu__btn');
const btnBuy = document.querySelector('.shop__buy-btn');
const btnBuyClose = document.querySelector('.order__close-btn');

btnBuy.addEventListener('click', popupStatusMenu);
btnBurger.addEventListener('click', popupStatusMenu);
btnCloseBurger.addEventListener('click', popupStatusMenu);
btnBuyClose.addEventListener('click', popupStatusMenu)