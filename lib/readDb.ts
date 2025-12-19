import fs from "fs";
import path from "path";

export function readDb() {
  const filePath = path.join(process.cwd(), "db.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}
