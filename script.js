const wrapper = document.querySelector('.wrapper');
const linkLogin = document.querySelector('.link-login');
const linkRegistro = document.querySelector('.link-registro');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

linkRegistro.addEventListener('click', () => {
    wrapper.classList.add('active');
});

linkLogin.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});