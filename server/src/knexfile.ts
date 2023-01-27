// const path = require("path");
// require("dotenv").config();

import path from "path";
import dotEnv from "dotenv";

dotEnv.config({ path: path.join(__dirname + "/../.env") });
// console.log(path.dirname());
console.log(process.env.MYSQL_HOST);
console.log(
  "🚀 ~ file: knexfile.ts:10 ~ process.env.MYSQL_HOST",
  process.env.MYSQL_HOST
);

const dbMigration = {
  development: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT as unknown as number,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    pool: { min: 0, max: 7 },
    seeds: {
      directory: path.join(__dirname, "/seeds/development"),
    },
  },
  production: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    pool: { min: 0, max: 7 },
    seeds: {
      directory: path.join(__dirname, "/seeds/production"),
    },
  },
};

export default dbMigration;
