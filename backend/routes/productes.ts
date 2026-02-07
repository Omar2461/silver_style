import express from "express";
import { validationResult } from "express-validator";

import fs from "fs";
import path from "path";

import { readDb } from "../helper/readDb";
import Product from "../models/Product";

import { validators } from "./validators";

const router = express.Router();

type Product = {
  _id: string;
  name: string;
  categoryId: string;
  typeId: string;
  price: number;
};

const { requireName, requirePrice, requireCategoryId, requireTypeId } =
  validators;

router.get("/", async (req, res) => {
  const products: Product[] = await Product.find();

  let categoryIds: string[] = [];
  if (req.query.categoryId) {
    if (typeof req.query.categoryId === "string") {
      categoryIds = [req.query.categoryId];
    } else if (Array.isArray(req.query.categoryId)) {
      categoryIds = req.query.categoryId.filter(
        (id) => typeof id === "string",
      ) as string[];
    }
  }

  let typeIds: string[] = [];

  if (req.query.typeId) {
    if (typeof req.query.typeId === "string") {
      typeIds = [req.query.typeId];
    } else if (Array.isArray(req.query.typeId)) {
      typeIds =  req.query.typeId.filter(
        (id) => typeof id === "string",
      ) as string[];
    }
  }

  const filtered = products.filter((p) => {
    const matchCategory =
      categoryIds.length === 0 || categoryIds.includes(p.categoryId);

    const matchType = typeIds.length === 0 || typeIds.includes(p.typeId);

    return matchCategory && matchType;
  });

  res.json(filtered);
});

router.get("/:id", async (req, res) => {
  const products: Product[] = await Product.find();

  const productId = req.params.id;
  console.log(productId);

  const product = products.find((p) => p._id == productId);

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

    // const newId = products.length
    //   ? Math.max(...products.map((p) => p._idid)) + 1
    //   : 1;

    const newProduct = { ...req.body };

    products.push(newProduct);
    fs.writeFileSync(
      path.join(__dirname, "../db.json"),
      JSON.stringify({ ...data, products }, null, 2),
    );

    res.send("Added successfully");
  },
);

export default router;
