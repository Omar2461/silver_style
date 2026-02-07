import express from "express";

import Type from "../models/Type";

const router = express.Router();

type Types = {
  id: string;
  name: string;
};

router.get("/", async (req, res) => {
  const types: Types[] = await Type.find();

  res.json(types);
});

export default router;
