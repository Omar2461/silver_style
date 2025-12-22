import express from "express";

import { readDb } from "../helper/readDb";

const router = express.Router();

type Category = {
  id: number;
  name: string;
};

router.get("/", (req,res) => {
  const data = readDb();
  const categories: Category[] = data.categories;

  res.json(categories)
});

export default router;
