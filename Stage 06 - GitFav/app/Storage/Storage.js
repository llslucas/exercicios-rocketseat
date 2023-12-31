class Storage{
    constructor(key){      
        this.key = key;        
    }

    update(newValue){
        localStorage.setItem(this.key, newValue);
    }

    load(){
        return localStorage.getItem(this.key);
    }
}

export const usersStorage = new Storage('@github-favorites:');