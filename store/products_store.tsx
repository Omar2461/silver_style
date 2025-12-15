import { create } from "zustand";

type ProductsType = {
  id: number;
  title: string;
  price: number;
};

type Category = {
  id: number;
  name: "Necklace" | "Bracelet" | "Earrings" | "Ring";
  products: ProductsType[];
};

interface ProductsStateType {
  categories: Category[];
  fetchCategories: () => Promise<void>;
}

export const useProductsStore = create((set) => ({
  categories: [],

  fetchCategories: async () => {
    const res = await fetch("http://localhost:3005/categories");
    const data = await res.json();
    set({ categories: data });
  },
}));
