const wrapper = document.querySelector('.wrapper');
const linkLogin = document.querySelector('.link-login');
const linkRegistro = document.querySelector('.link-registro');

linkRegistro.addEventListener('click', () => {
    wrapper.classList.add('active');
});

linkLogin.addEventListener('click', () => {
    wrapper.classList.remove('active');
});
