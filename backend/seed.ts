import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "./models/Category";
import Type from "./models/Type";

dotenv.config();

const seed = async () => {
  const filePath = path.join(process.cwd(), "db.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(fileData);

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not defined in .env");
  }

  await mongoose.connect(process.env.MONGO_URI);

  await Category.deleteMany();

  await Category.insertMany(data.categories);

  await Type.deleteMany();

  await Type.insertMany(data.types);

  console.log("Data migrated to MongoDB Atlas!");
  process.exit();
};

seed();
