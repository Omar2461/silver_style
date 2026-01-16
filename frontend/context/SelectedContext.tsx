import { createContext, useContext, useState, ReactNode } from "react";

type SelectedContextType = {
  selected: number[]|undefined;
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
  const [selected, setSelected] = useState<number[] | undefined>(undefined);

  const toggleItem = (item: number) => {
    setSelected((prev) => {
      if (!prev) {
        return [item];
      }

      return prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];
    });
  };

  return (
    <SelectedContext.Provider value={{ selected, toggleItem, setSelected }}>
      {children}
    </SelectedContext.Provider>
  );
};

export const useSelected = () => {
  const context = useContext(SelectedContext);
  return context;
};
