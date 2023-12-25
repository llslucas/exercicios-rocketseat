export class Router{
    routers = {};

    route(event){        
        event = event || window.event;       
        event.preventDefault();                
        window.history.pushState(null, "", event.target.href || event.target.dataset.route);       
        this.handle();        
    };

    handle(){
        const app = document.querySelector('#app');
        const { pathname } = window.location;
        const route = this.routers[pathname] || this.routers[404];  

        fetch(route)
            .then(data => data.text())
            .then(text => app.innerHTML = text);     

        document.documentElement.dataset.route = pathname;
        
        document.querySelector('a.active').classList.remove('active');
        document.querySelector(`a[href="${pathname}"]`).classList.add('active');
    };

    addRoute(routeName, path){
        this.routers[routeName] = path;
    }
}