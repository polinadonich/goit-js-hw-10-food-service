import template from './template/menu.hbs';
import menu from './menu.json';


const menuRef = dishesCard(menu);

function dishesCard(menu) {
  return template(menu);
}

const ulDishes = document.querySelector("ul");
ulDishes.insertAdjacentHTML('beforeend', menuRef);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const LOCAL_STORAGE = 'theme';

const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

switcher.addEventListener('change', clickHandler);
switcher.addEventListener('change', setLocalStorage);
document.addEventListener('DOMContentLoaded', getLocalStorageTheme);

const defaultTheme = localStorage.getItem(LOCAL_STORAGE);

if (defaultTheme === null) {
body.classList.add(Theme.LIGHT);
}
else {
body.classList.add(defaultTheme);
}

function clickHandler() {

    if (switcher.checked === true) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
    } else {
        body.classList.replace(Theme.DARK, Theme.LIGHT);
    }
}

function setLocalStorage() {
    switcher.checked
        ? localStorage.setItem(LOCAL_STORAGE, Theme.DARK)
        : localStorage.setItem(LOCAL_STORAGE, Theme.LIGHT);
}

function getLocalStorageTheme() {
    const localStoregeTheme = localStorage.getItem(LOCAL_STORAGE);
    if (localStoregeTheme === Theme.DARK) {
        body.classList.add(Theme.DARK);
        switcher.checked = true;
    }
}
