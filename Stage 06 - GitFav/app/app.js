import { favoritesController } from "./Control/FavoritesController.js";

const inputSearch = document.querySelector('#search input');
const inputButton = document.querySelector('#search button');

inputButton.addEventListener('click', event => {       
    favoritesController.addNewUser(inputSearch.value);    
    inputSearch.value = ''
})

inputSearch.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        favoritesController.addNewUser(inputSearch.value); 
        inputSearch.value = ''
    };
})