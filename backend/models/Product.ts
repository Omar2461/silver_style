import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    categoryId: { type: String, required: true },
    typeId: { type: String, required: true },
    image: String,
    description: { type: String, require: true },
  },
  { timestamps: true },
);

export default model("Product", productSchema);
