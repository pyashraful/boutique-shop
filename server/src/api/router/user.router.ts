import express, { Request, Response } from "express";
import getExampleResources from "../controller/example";

const router = express.Router();

router.get("/login", (req: Request, res: Response) => {
  console.log("hello");
  getExampleResources()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  console.log("hello");
  res.send("login");
});

export default router;
