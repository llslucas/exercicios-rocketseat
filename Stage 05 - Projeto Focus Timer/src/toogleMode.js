let darkMode = false;
const buttonToggle = document.querySelector('#toogleMode');

buttonToggle.addEventListener('click', event => {    
    document.documentElement.classList.toggle('lightMode');

    const mode = darkMode ? 'Modo Escuro' : 'Modo Claro';

    buttonToggle.querySelector('span').textContent = `${mode} ativado!`;

    darkMode = !darkMode;
})