import express from "express";

import { readDb } from "../helper/readDb";

const router = express.Router();

type Category = {
  id: number;
  name: string;
  sizes: string[];
};

router.get("/", (req, res) => {
  const data = readDb();
  const categories: Category[] = data.categories;

  res.json(categories);
});

router.get("/:id", (req, res) => {
  const data = readDb();
  const categoryId = parseInt(req.params.id);

  const category = data.categories.find(
    (cat: Category) => cat.id === categoryId
  );

  res.json(category);
});

export default router;
