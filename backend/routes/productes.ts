import express from "express";
import { validationResult } from "express-validator";

import fs from "fs";
import path from "path";

import { readDb } from "../helper/readDb";

import { validators } from "./validators";

const router = express.Router();

type Product = {
  id: number;
  name: string;
  categoryId: number;
  typeId: number;
  price: number;
};

const { requireName, requirePrice, requireCategoryId, requireTypeId } =
  validators;

router.get("/", (req, res) => {
  const data = readDb();
  const products: Product[] = data.products;

  let categoryIds: number[] = [];
  if (req.query.categoryId) {
    if (typeof req.query.categoryId === "string") {
      categoryIds = [Number(req.query.categoryId)];
    } else if (Array.isArray(req.query.categoryId)) {
      categoryIds = req.query.categoryId.map(Number);
    }
  }

  const filtered = categoryIds.length
    ? products.filter((p) => categoryIds.includes(p.categoryId))
    : products;

  res.json(filtered);
});

router.get("/:id", (req, res) => {
  const data = readDb();
  const products: Product[] = data.products;

  const productId = parseInt(req.params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

router.post(
  "/",
  requireName,
  requirePrice,
  requireCategoryId,
  requireTypeId,
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const data = readDb();
    const products: Product[] = data.products;

    const newId = products.length
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;

    const newProduct = { id: newId, ...req.body };

    products.push(newProduct);
    fs.writeFileSync(
      path.join(__dirname, "../db.json"),
      JSON.stringify({ ...data, products }, null, 2)
    );

    res.send("Added successfully");
  }
);

export default router;
