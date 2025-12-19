import { createContext, useContext, useState, ReactNode } from "react";

type SelectedContextType = {
  selected: number[];
  toggleItem: (item: number) => void;
  setSelected: (items: number[]) => void;
};

const SelectedContext = createContext<SelectedContextType | undefined>(
  undefined
);

type ProviderProps = {
  children: ReactNode;
};

export const SelectedProvider = ({ children }: ProviderProps) => {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleItem = (item: number) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <SelectedContext.Provider value={{ selected, toggleItem ,setSelected}}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelected = () => {
  const context = useContext(SelectedContext);
  if (!context) {
    throw new Error("useSelected must be used within a SelectedProvider");
  }
  return context;
};
