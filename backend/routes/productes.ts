import express from "express";
import { check, validationResult } from "express-validator";

import fs from "fs";
import path from "path";

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

router.post(
  "/",
  check("name")
    .notEmpty()
    .not()
    .isNumeric()
    .trim()
    .withMessage("Must pass a valid product name"),
  check("price")
    .isNumeric()
    .custom((price) => {
      if (price <= 0) {
        throw new Error("Must pass a valid price");
      }
      return true;
    }),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const data = readDb();
    const products: Product[] = data.products;

    const newId = products.length
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;

    console.log("newId::", newId);
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
