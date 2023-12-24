import state from './state.js';
import * as elements from './elements.js';
import { reset } from './actions.js';
import * as sounds from './sounds.js';

export function updateTimer(minutes, seconds){
    minutes = minutes ?? state.minutes;
    seconds = seconds ?? state.seconds;

    elements.minutes.textContent = String(minutes).padStart(2, "0");
    elements.seconds.textContent = String(seconds).padStart(2, "0");
}

export function countdown(){
    if(state.isRunning){
        clearTimeout(state.countDownId);
        
        let minutes = Number(elements.minutes.textContent);
        let seconds = Number(elements.seconds.textContent);

        if(seconds > 0){
            seconds--;
        }else if(minutes > 0){
            minutes--;
            seconds = 59;
        }else if(minutes === 0 && seconds === 0){
            sounds.kitchenTimer.play();
            reset();
            return;
        }
        
        updateTimer(minutes, seconds);
        
        state.countDownId = setTimeout(() => countdown(), 1000);
    }
}