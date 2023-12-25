import { Router } from './Router.js';

let router = new Router();

router.addRoute('/', './pages/home.html')
router.addRoute('/universo', './pages/universo.html')
router.addRoute('/explore', './pages/explore.html')
router.addRoute(404, './pages/404.html')

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
    
