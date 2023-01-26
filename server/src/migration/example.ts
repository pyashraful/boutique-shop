import knex from "knex";

exports.up = function (knex: any) {
  return knex.schema.createTable("exampleResources", (table: any) => {
    table.increments();
    table.string("title").notNullable();
    table.datetime("createdAt").defaultTo(knex.fn.now()).notNullable();
    table.datetime("updatedAt").defaultTo(knex.fn.now()).notNullable();
    table.datetime("deletedAt");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: any) {
  return knex.schema.dropTable("exampleResources");
};
