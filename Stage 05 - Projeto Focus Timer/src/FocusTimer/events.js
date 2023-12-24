import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as elements from './elements.js';
import state from "./state.js";
import * as timer from "./timer.js";

export function registerControls() {
    controls.addEventListener('click', event => {        
        const action = event.target.dataset.action;
        if(typeof actions[action] != 'function'){
            return;
        }

        actions[action]();        
    })
}

export function setMinutes() {
    elements.minutes.addEventListener('focus', e => elements.minutes.textContent = '');

    elements.minutes.addEventListener('keypress', e => {
        if(!/\d/.test(e.key)){
            e.preventDefault();
        }});

    elements.minutes.addEventListener('blur', e => {
        let time = e.target.textContent;
        time = time > 60 ? 60 : time;

        state.minutes = time;
        state.seconds = 0;

        timer.updateTimer();

        e.target.removeAttribute('contenteditable')
    })
}