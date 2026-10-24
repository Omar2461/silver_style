import { create } from "zustand";

interface Category {
  id: number;
  name: string;
}

interface categoryStoreState {
  categories: Category[];
  loading: boolean;
  error: string | null;
  fetchCategories: () => void;
}

export const useCategoryStore = create<categoryStoreState>((set) => ({
  categories: [],
  loading: false,
  error: null,
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DOTNET_API}/Department`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data: Category[] = await res.json();
      set({ categories: data, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));
