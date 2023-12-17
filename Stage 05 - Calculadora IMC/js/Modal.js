export const Modal = {
    text: document.querySelector('#imc'),
    container: document.querySelector('.container-modal'),
    closeButton: document.querySelector('#close-modal'),

    show(text){
        this.text.innerHTML = text;
        this.container.classList.add('show');
    },

    hide(){
        this.container.classList.remove('show');
    }
}