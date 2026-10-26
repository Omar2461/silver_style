import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  departmentId: number;
  productTypeId: number;
  details:string;
}

interface productStoreState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => void;
  getProductById: (id: number) => void;
  // addProduct:(product:Product)=>Promise<void>;
}

export const useProductStore = create<productStoreState>((set) => ({
  products: [],
  selectedProduct: null,
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
  getProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOTNET_API}/Products/${id}`);
      if(!res.ok){
        throw new Error("faild to get the product");
      }
      const data:Product=await res.json();
      set({selectedProduct:data,loading:false})

    } catch (err) {
      set({loading:false,error:(err as Error).message})
    }
  },
}));
