import bcryptjs from 'bcryptjs';
const { hash, compare } = bcryptjs;
import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";

export default class UsersController {
    async create(request, response){
        const { name, email, password } = request.body;

        const userExists = await knex('users').where({ email }).first();

        if(userExists){
            throw new AppError('Email cadastrado já existe');
        }

        const hashedPassword = await hash(password, 8);
        
        const [user_id] = await knex('users').insert({
            name,
            email,
            password: hashedPassword
        })     

        response.status(201).json(`Usuário criado com sucesso. ID: ${user_id}`);
    }

    async update(request, response){
        const {name, email, oldPassword, password, avatar} = request.body;
        const id = request.user.id;

        const user = await knex('users').where({ id }).first();
        const userWithUpdatedEmail = await knex('users').where({ email }).first();

        if(!user){
            throw new AppError('Usuário não encontrado');
        }

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id){
            throw new AppError('Já existe um usuário com o e-mail informado');
        }

        if(password && !oldPassword){
            throw new AppError('Você deve inserir a senha anterior');
        }

        if(password && oldPassword){
            const checkPassword = await compare(oldPassword, user.password);

            if (!checkPassword){
                throw new AppError('A senha antiga é diferente da atual');
            }

            user.password = await hash(password, 8);
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;
        user.avatar = avatar ?? user.avatar;
        user.updated_at = knex.fn.now();

        await knex('users').update(user).where({ id });

        response.status(200).json('Usuário alterado com sucesso!');
    }
}
