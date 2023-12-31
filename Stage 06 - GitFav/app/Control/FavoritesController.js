import { Favorites } from "../View/Favorites.js";
import { GitUser } from "../js/Model/GitUser.js";
import { GitUsers } from "../js/Model/GitUsers.js";
import { usersStorage } from "../Storage/Storage.js";
import { GitHubDAO } from "../DAO/gitHubDAO.js";

class FavoritesController{
    constructor(){        
        this.gitUsers = new GitUsers();
        this.table = new Favorites();   
        this.dao = new GitHubDAO(); 
        
        this.updateEntries();
        this.updateTable();
    }

    updateTable(){
        this.table.clearRows();
        if(this.gitUsers.entries.length > 0){
            this.gitUsers.entries.forEach(user => this.table.appendRow(user));
        }else{
            this.table.setNoFavoritesScreen();
        }        
        this.save();
    }

    async addNewUser(userLogin){     
        const userExist = this.gitUsers.entries.find(user => user.login === userLogin) !== undefined;  
        
        if(userExist){
            alert('Usuário Já Cadastrado');
        }else{        
            const user = await this.dao.getUser(userLogin);
            if(user){
                this.appendToTable(user);   
            }
        }
    }

    removeFromTable(gitUser){
        this.gitUsers.remove(gitUser);
        this.updateTable();
    }

    appendToTable(gitUser){        
        this.gitUsers.append(gitUser);     
        this.updateTable();        
    }

    updateEntries(){
        const itens = JSON.parse(usersStorage.load());

        itens.forEach(item => {
            const gitUser = new GitUser(item);
            this.gitUsers.append(gitUser);
        })
    }

    save(){
        usersStorage.update(JSON.stringify(this.gitUsers.entries));
    }

    
    
}

export const favoritesController = new FavoritesController();