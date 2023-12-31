import { favoritesController } from "../Control/FavoritesController.js";

export class Favorites{
    constructor(){
        this.root = document.querySelector('#table');
        this.body = this.root.querySelector('tbody');                
    }

    clearRows(){
        this.body.innerHTML = '';
    }

    appendRow(gitUser){
        const tr = gitUser.template();
        this.body.appendChild(tr);
        tr.querySelector('.delete').addEventListener('click', event => {
            const confirmRemove = confirm('Deseja realmente remover este usuário?');
            if(confirmRemove){
                favoritesController.removeFromTable(gitUser);
                favoritesController.updateTable();
            };
        })
    } 

    setNoFavoritesScreen(){
        this.body.innerHTML = `
            <tr>
                <td colspan="4">
                    <div class="empty">
                        <img src="assets/Estrela.svg" alt="">
                        Nenhum Favorito Ainda
                    </div>
                </td>
            </tr>
        `
    }
}