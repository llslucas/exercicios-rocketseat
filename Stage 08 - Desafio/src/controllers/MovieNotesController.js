import { request } from "express";
import knex from "../database/knex/index.js";
import AppError from "../utils/AppError.js";
import mensagemSucesso from '../utils/mensagemSucesso.js';

export default class MovieNotesController{
    async create(request, response){
        const { title, description, rating, tags } = request.body;
        const { user_id } = request.params;

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

        const note = await knex('movie_notes').where({ id });
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
        const { user_id, title, tags } = request.query;
        const searchTitle = title ?? ''

        let notes;
        
        if (tags){
            const tagList = tags.split(',').map(tag => tag.trim());
            notes = await knex('movie_notes')
                                .select('movie_notes.title', 'movie_notes.description', 'movie_notes.rating')
                                .innerJoin('movie_tags', 'movie_notes.id', 'movie_tags.note_id')
                                .where('movie_notes.user_id', user_id)
                                .whereLike('movie_notes.title', `%${searchTitle}%`)
                                .whereIn('movie_tags.name', tagList)
                                .orderBy('movie_notes.title')
                                .distinct('movie_notes.id');            
        }else{        
            notes = await knex('movie_notes')
                                .select('movie_notes.title', 'movie_notes.description', 'movie_notes.rating')
                                .where({ user_id })
                                .whereLike('movie_notes.title', `%${searchTitle}%`)
                                .orderBy('title');
        }

        const userTags = await knex('movie_tags').where({ user_id });

        const notesWithTags = notes.map(note => {
            const noteTags = userTags.filter(tag => tag.note_id === note.id).map(tag => tag.name);
            return {
                ...note,
                noteTags
            }
        })  

        response.json(notesWithTags);
    }
}