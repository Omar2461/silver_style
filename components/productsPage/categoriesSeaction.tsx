"use client";

import { useGetCategoriesQuery } from "@/store";

import Button from "../General/Button";

import { useState } from "react";

function CategoriesSeaction() {
  const [active, setActive] = useState<string | null>(null);

  const { data, error, isLoading } = useGetCategoriesQuery();

  // const Categories = ["All Categories", "Silver"];

  const handleClick = (categori: string) => {
    setActive(categori);
  };

  const renderCategories = data?.map((category) => {
    return (
      <Button
        key={category.id}
        onClick={() => handleClick(category.name)}
        className={`border border-gray-600 focus:border-black/10 hover:bg-black/10 hover:border-black/10 
          ${category.name === active ? "bg-black/10 border-black/10" : ""}`}
      >
        {category.name}
      </Button>
    );
  });

  console.log(data);

  return (
    <div
      className={`flex gap-2 overflow-x-auto pb-4 w-fit transtion duration-400`}
    >
      {renderCategories}
    </div>
  );
}

export default CategoriesSeaction;
