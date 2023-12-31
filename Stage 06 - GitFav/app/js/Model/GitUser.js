export class GitUser{
    constructor(obj){
        this.avatar_url = obj.avatar_url;
        this.name = obj.name;
        this.login = obj.login;
        this.public_repos = obj.public_repos;
        this.followers = obj.followers;
    }

    template(){
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <tr>
            <td>                
                <div class="user flex">                    
                    <a href="https://github.com/${this.login}">
                        <img src="${this.avatar_url}" alt="">
                    </a> 
                    <div class="info">
                        <a href="https://github.com/${this.login}">
                            ${this.name}
                        </a>
                        <span>${this.login}</span>
                    </div>  
                </div>             
            </td>
            <td>${this.public_repos}</td>
            <td>${this.followers}</td>  
            <td>
                <p class="delete">
                    Remover
                </p>
            </td>
        </tr>
        `

        return tr;
    }
}