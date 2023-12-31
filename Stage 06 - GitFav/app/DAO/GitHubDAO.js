import { GitUser } from "../js/Model/GitUser.js"

export class GitHubDAO{
    constructor(){
        this.address = 'https://api.github.com/users/'
    }

    async getUser(userId){   
        try{
            const value = await fetch(this.address + userId);

            if(!value.ok){
                throw new Error('Deu Ruim');
            }

            const obj = await value.json();
            return new GitUser(obj);  
        }catch(e){
            alert('Usuário não encontrado.');
        }
    }    
}