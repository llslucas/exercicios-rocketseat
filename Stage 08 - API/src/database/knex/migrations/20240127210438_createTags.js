/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) { 
    return knex.schema.createTable("tags", table => {
        table.increments("id");
        table.text("name").notNullable;

        table.integer("user_id").references("id").inTable("users");
        table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");  
    }); 
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) { return knex.schema.dropTable("tags") }