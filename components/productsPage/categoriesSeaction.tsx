"use client";

import Button from "../General/Button";

import { useState } from "react";

function CategoriesSeaction() {
  const [active, setActive] = useState<string|null>(null);

  const Categories = ["All Categories", "Silver"];

  const handleClick = (categori: string) => {
    setActive(categori);
  };

  const renderCategories = Categories.map((categori, idx) => {
    return (
      <Button
        key={idx}
        onClick={() => handleClick(categori)}
        className={`border border-gray-600 focus:border-black/10 hover:bg-black/10 hover:border-black/10 
          ${categori===active ? "bg-black/10 border-black/10" : ""}`}
      >
        {categori}
      </Button>
    );
  });
  return (
    <div className="flex gap-3 overflow-x-auto pb-4">{renderCategories}</div>
  );
}

export default CategoriesSeaction;
