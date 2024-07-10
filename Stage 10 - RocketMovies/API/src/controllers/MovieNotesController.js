import { request } from "express";
import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";
import mensagemSucesso from '../utils/mensagemSucesso.js';

export default class MovieNotesController{
    async create(request, response){
        const { title, description, rating, tags } = request.body;
        const user_id = request.user.id;

        const [note_id] = await knex('movie_notes').insert({
            title, 
            description, 
            rating,
            user_id
        });

        const tagsInsert = tags.map(tag => {
            return {
                note_id,
                user_id,
                name: tag
            }
        });

        await knex('movie_tags').insert(tagsInsert);

        response.status(200).json(new mensagemSucesso(note_id, "Nota cadastrada com sucesso!"));
    }

    async show(request, response){
        const { id } = request.params;

        const note = await knex('movie_notes').where({ id }).first();
        const tags = await knex('movie_tags').where({ note_id : id });

        return response.json({
            ...note,
            tags
        });
    }

    async delete(request, response){
        const { id } = request.params;

        await knex('movie_notes').where({ id }).delete();

        return response.json('Nota excluída com sucesso.');
    }

    async index(request, response){
        const { title } = request.query;
        const user_id = request.user.id;
        const searchTitle = title ?? ''

        console.log(title);

        let notes;
        
        notes = await knex('movie_notes')                                        
                                        .where({ user_id })
                                        .whereLike('movie_notes.title', `%${searchTitle}%`)
                                        .groupBy('id')
                                        .orderBy('updated_at', "desc");
                                        

        const userTags = await knex('movie_tags').where({ user_id });

        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id);
            return {
                ...note,
                noteTags
            }
        })  

        response.json(notesWithTags);
    }
}