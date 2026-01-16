import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type SelectedContextType = {
  selected: number | undefined;
  toggleItem: (item: number) => void;
  setSelected: (items: number | undefined) => void;
};

const TypeSelectedContext = createContext<SelectedContextType | undefined>(
  undefined
);

export const TypeSelectedProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  const toggleItem = (item: number) => {
    setSelected((prev) =>
      prev === item ? undefined : item
    );
  };

  return (
    <TypeSelectedContext.Provider value={{ selected, toggleItem, setSelected }}>
      {children}
    </TypeSelectedContext.Provider>
  );
};


export const useTypeSelected = () => {
    const context = useContext(TypeSelectedContext);
    return context;
}
