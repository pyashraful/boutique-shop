import { Knex } from "knex";

exports.up = function (knex: Knex) {
  return knex.schema.createTable("user", (table: any) => {
    table.increments();
    table.string("username").unique();
    table.string("email").unique();
    table.string("password");
    table.timestamps("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex: any) {
  return knex.schema.dropTable("user");
};

// migrate: latest;
