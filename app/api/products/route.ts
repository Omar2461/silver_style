import { NextResponse } from "next/server";
import { readDb } from "@/lib/readDb";


type Product = {
  id: number;
  name: string;
  categoryId: number;
  typeId: number;
  price: number;
};


export async function GET(req: Request) {
  const data = readDb();
  const products: Product[] = data.products; 

  const url = new URL(req.url);
  const categoryIds = url.searchParams.getAll("categoryId").map(Number);

  const filtered: Product[] =
    categoryIds.length > 0
      ? products.filter((p: Product) => categoryIds.includes(p.categoryId))
      : products;

  return NextResponse.json(filtered);
}
