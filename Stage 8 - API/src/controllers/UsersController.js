import AppError from "../utils/AppError.js";

export default class UsersController {
    create(request, response){
        const { name, email, password } = request.body;

        if(!name){
            throw new AppError("Nome é Obrigatório");
        }

        response.status(201).json(`Usuário: ${name}, E-mail: ${email}, Senha: ${password}`);
    }
}