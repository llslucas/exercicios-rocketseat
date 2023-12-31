export class GitUsers{
    constructor(){
        this.entries = [];
    }

    append(gitUser){              
        this.entries = [...this.entries, gitUser];                    
    }

    remove(gitUser){
        this.entries = this.entries.filter(entry => entry !== gitUser);         
    }    
}