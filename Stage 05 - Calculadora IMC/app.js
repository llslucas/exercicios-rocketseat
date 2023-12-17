import { Form } from './js/form.js';
import { Modal } from './js/modal.js';
import { Error } from './js/Error.js';
import { calcImc, isNumber } from './js/Utils.js';

Form.form.addEventListener('submit', event => {
    event.preventDefault();
        
    if(isNumber(Form.weightInput.value) && isNumber(Form.heightInput.value)){
        const imc = calcImc(Form.weightInput.value, Form.heightInput.value);
        Modal.show(`Seu IMC é ${imc.toFixed(2)}`);
    }else{
        Error.show();
    }
})

Form.form.addEventListener('input', event => {
    Error.hide();
})

Modal.closeButton.addEventListener('click', event => Modal.hide());

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        Modal.hide();
    }
});