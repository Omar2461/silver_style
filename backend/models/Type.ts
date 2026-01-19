import { Schema, model } from "mongoose";

const typeSchmea = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

export default model("Type", typeSchmea);