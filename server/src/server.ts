import express, { Application, Request, Response, NextFunction } from "express";
import dotEnv from "dotenv";
import knex from "knex";

//local import

// import router from "./api/router/index.js";
import router from "./api/router";

//env
dotEnv.config();

// Boot express
const app: Application = express();
const port = 5000;

// Application routing
app.use("/api/", router);

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`));
