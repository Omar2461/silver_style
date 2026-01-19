import express from "express";
import cors from "cors";
import productsRouter from "./routes/productes";
import categoriesRouter from "./routes/categries";
import typesRouter from "./routes/types";
import dotenv from "dotenv";
import connectDB from "./config/db";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB()

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/types", typesRouter);

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Express server running at http://localhost:${PORT}`)
);
