// require('dotenv').config({ path: '../../../.env' });

import dotenv from "dotenv";
import dbMigration from "../knexfile";
import knex, { Knex } from "knex";
// import env from "../../"

// dotenv.config({ path: "../../.env" });

// db setup
const dbOptions: Knex.Config = dbMigration.development;

// create connection
const db = knex(dbOptions);
// console.log(knex);

db.raw("SELECT VERSION()").then((version) => {
  // console.log(version[0][0]);
});

export default db;
