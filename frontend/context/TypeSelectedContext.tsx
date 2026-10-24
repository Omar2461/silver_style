import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type SelectedContextType = {
  selected: number | undefined;
  toggleItem: (item: number| undefined) => void;
  setSelected: (items: number | undefined) => void;
};

const TypeSelectedContext = createContext<SelectedContextType | undefined>(
  undefined
);

export const TypeSelectedProvider = ({ children }: { children: ReactNode }) => {
  const [selected, setSelected] = useState<number | undefined>(undefined);

  const toggleItem = (item: number | undefined) => {
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
     if (!context) {
       throw new Error("useSelected must be used within a SelectedProvider");
     }
     return context;
}
