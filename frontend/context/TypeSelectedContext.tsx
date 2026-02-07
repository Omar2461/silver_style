import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type SelectedContextType = {
  selected: string | undefined;
  toggleItem: (item: string) => void;
  setSelected: (items: string | undefined) => void;
};

const TypeSelectedContext = createContext<SelectedContextType | undefined>(
  undefined
);

export const TypeSelectedProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const toggleItem = (item: string) => {
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
