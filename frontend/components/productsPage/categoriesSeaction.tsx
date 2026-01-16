"use client";

import { useGetTypesQuery } from "@/store";

import Button from "../General/Button";
import Skelton from "../General/Skelton";

import { useState } from "react";
import { useTypeSelected } from "@/context/TypeSelectedContext";

type Typeprops = {
  name: string;
  id: number;
};

function CategoriesSeaction() {
  const [active, setActive] = useState<string | null>(null);

  const { data, error, isFetching } = useGetTypesQuery();
  const { selected, toggleItem } = useTypeSelected();

  const handleClick = (categori: Typeprops) => {
    setActive(categori.name);
    toggleItem(categori.id);
  };

  let content;
  if (isFetching) {
    content = <Skelton className="rounded-full h-8 w-20" times={3} />;
  } else if (error) {
    content = <div>Error loading categories</div>;
  } else {
    content = data?.map((category) => {
      return (
        <Button
          key={category.id}
          onClick={() => handleClick(category)}
          className={`border border-gray-600 focus:border-black/10 hover:bg-black/10 hover:border-black/10 
          ${category.name === active ? "bg-black/10 border-black/10" : ""}`}
        >
          {category.name}
        </Button>
      );
    });
  }

  return (
    <div
      className={`flex gap-2 overflow-x-auto pb-4 w-fit transtion duration-400`}
    >
      {content}
    </div>
  );
}

export default CategoriesSeaction;
