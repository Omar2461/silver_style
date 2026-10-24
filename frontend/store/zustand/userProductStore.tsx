import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  departmentId:number;
  productTypeId:number;
}

interface productStoreState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
  // addProduct:(product:Product)=>Promise<void>;
}

export const useProductStore = create<productStoreState>((set) => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOTNET_API}/Products`);
      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data: Product[] = await res.json();
      set({ products: data, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));
