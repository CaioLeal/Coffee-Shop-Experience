const mobileBtn = document.querySelector('.btn-mobile'); //Pegando a class do botão
const navLinks = document.getElementById('nav-links'); //Pegando a class da navbar
const icon = document.querySelector('.btn-mobile i');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show'); //Fazendo o hamburguer abrir apenas ao clicar
    icon.classList.toggle('fa-times'); //Ao clicar adiciona o x
    icon.classList.toggle('fa-bars'); //Ao clicar adiciona o hamburguer
})

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if(window.scrollY > 0) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, .5)';
    }else {
        header.style.boxShadow = 'none';
    }
})