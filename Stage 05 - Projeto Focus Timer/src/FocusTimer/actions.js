import * as timer from './timer.js';
import state from './state.js';
import * as elements from './elements.js';
import * as sounds from './sounds.js';

export function toogleRunning(){    
    state.isRunning = document.documentElement.classList.toggle('running');
    timer.countdown();
    sounds.buttonPressAudio.play();
}

export function set(){
   elements.minutes.setAttribute('contenteditable', true);   
   elements.minutes.focus();   
   sounds.buttonPressAudio.play();
}

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.remove('running');
    timer.updateTimer();
}

export function toogleMusic(){
    state.musicOn = document.documentElement.classList.toggle('music');
    if(state.musicOn){
        sounds.bgAudio.play();
    }else{
        sounds.bgAudio.pause();
    }    
}