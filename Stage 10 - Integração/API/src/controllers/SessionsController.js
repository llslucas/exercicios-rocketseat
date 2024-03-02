import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";
import authConfig from '../configs/auth.js';
import bcryptjs from "bcryptjs";
const { compare } = bcryptjs;
import jsonwebtoken from "jsonwebtoken";
const { sign } = jsonwebtoken;


export class SessionsController{
    async create(request, response){
        const { email, password } = request.body;

        const user = await knex("users").where({ email }).first();    
        const passwordMatched = await compare(password, user.password);

        if(!user || !passwordMatched){
            throw new AppError("Usuário e/ou senha incorreta", 401);
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({}, secret, {
            subject: String(user.id),
            expiresIn
        });

        return response.json({user, token});
    }
}