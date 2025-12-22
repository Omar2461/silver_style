import express from "express";

import { readDb } from "../helper/readDb";

const router = express.Router();

type Types = {
  id: number;
  name: string;
};

router.get("/", (req, res) => {
  const data = readDb();
  const types: Types[] = data.types;

  res.json(types);
});

export default router;
