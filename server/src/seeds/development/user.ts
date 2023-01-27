import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user").del();

  // Inserts seed entries
  await knex("user").insert([
    {
      userName: "ashraful",
      email: "test@gmail.com",
      password: "test",
    },
  ]);
}
