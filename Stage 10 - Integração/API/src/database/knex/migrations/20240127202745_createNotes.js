/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) { 
    return knex.schema.createTable("notes", table => {
        table.increments("id");
        table.text("title");
        table.text("description");
        table.integer("user_id").references("id").inTable("users");
        
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.timestamp("updated_at").defaultTo(knex.fn.now());
    }); 
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) { return knex.schema.dropTable("notes") }