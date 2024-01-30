export default function middleware(request, response, next){
    if(!request.body.isAdmin){
        return response.status(401).json({message: "Usuário não autorizado"});
    }

    next();    
}