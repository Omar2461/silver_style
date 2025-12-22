import express from "express";

import { readDb } from "../helper/readDb";

const router = express.Router();

type Product = {
  id: number;
  name: string;
  categoryId: number;
  typeId: number;
  price: number;
};

router.get("/", (req, res) => {
  const data = readDb();
  const products: Product[] = data.products;

  let categoryIds: number[] = [];
  if (req.query.categoryId) {
    if (typeof req.query.categoryId === "string") {
      categoryIds = [Number(req.query.categoryId)]
    } else if (Array.isArray(req.query.categoryId)) {
      categoryIds = req.query.categoryId.map(Number);
    }
  }

  const filtered = categoryIds.length
    ? products.filter((p) => categoryIds.includes(p.categoryId))
    : products;

  res.json(filtered);
});

export default router;
