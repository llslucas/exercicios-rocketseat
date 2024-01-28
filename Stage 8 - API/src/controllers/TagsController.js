import knex from "../database/knex/index.js";

export default class TagsController{
    async index(request, response){
        const { user_id } = request.params;

        const tags = await knex("tags").where({ user_id }).distinct('name');

        return response.json(tags);
    }
}