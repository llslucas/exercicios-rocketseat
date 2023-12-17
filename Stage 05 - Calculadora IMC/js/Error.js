export const Error = {
    divError: document.querySelector('.error'),

    show() {
        this.divError.classList.add('show');
    },
    hide(){
        this.divError.classList.remove('show');
    }
}