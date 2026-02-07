import express from "express";

import { readDb } from "../helper/readDb";
import Category from "../models/Category";

const router = express.Router();

type CategoryType = {
  _id: string;
  name: string;
  sizes: string[];
};

router.get("/", async (req, res) => {
  const categories: CategoryType[] = await Category.find();

  res.json(categories);
});

router.get("/:id", async (req, res) => {
  const categories: CategoryType[] = await Category.find();
  const categoryId = req.params.id;

  const category = categories.find((cat) => cat._id == categoryId);

  res.json(category);
});

export default router;
