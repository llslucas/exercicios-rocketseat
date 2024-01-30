/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('movie_tags', table => {
        table.increments('id');
        
        table.integer('note_id').references('id').inTable('movie_notes').onDelete('CASCADE');
        table.integer('user_id').references('id').inTable('users');

        table.text('name');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('movie_tags');
};
