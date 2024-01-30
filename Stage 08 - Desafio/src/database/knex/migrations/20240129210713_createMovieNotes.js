/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('movie_notes', table => {
    table.increments('id');
    table.text('title');
    table.text('description');
    table.integer('rating').checkBetween([1,5]);

    table.integer('user_id').references('id').inTable('users');

    table.dateTime('created_at');
    table.dateTime('updated_at');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('movie_notes');
};
