/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) { 
    return knex.schema.createTable("links", table => {
        table.increments("id");
        table.text("url").notNullable;
    
        table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");  
        table.timestamp("created_at").defaultTo(knex.fn.now());
    }); 
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) { return knex.schema.dropTable("links") }