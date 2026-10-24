"use client";

import { useTypeStore } from "@/store";

import Button from "../General/Button";
import Skelton from "../General/Skelton";

import { useState, useEffect } from "react";
import { useTypeSelected } from "@/context/TypeSelectedContext";

type materialProps = {
  name: string;
  id: number;
};

function CategoriesSeaction() {
  const [active, setActive] = useState<string | null>(null);

  const { fetchMaterials, materials, loading, error } = useTypeStore();
  const { selected, toggleItem } = useTypeSelected();

  useEffect(() => {
    fetchMaterials();
  }, [fetchMaterials]);

  const handleClick = (material: materialProps | null) => {
    if (!material) {
      setActive("All Types");
      toggleItem(undefined);
    } else {
      setActive(material.name);
      toggleItem(material.id);
    }
  };
  let content;
  if (loading) {
    content = <Skelton className="rounded-full h-8 w-20" times={3} />;
  } else if (error) {
    content = <div>Error loading categories</div>;
  } else {
    content = materials?.map((material) => {
      return (
        <Button
          key={material.id}
          onClick={() => handleClick(material)}
          className={`border border-gray-600 focus:border-black/10 hover:bg-black/10 hover:border-black/10 
          ${material.name === active ? "bg-black/10 border-black/10" : ""}`}
        >
          {material.name}
        </Button>
      );
    });
  }

  return (
    <div
      className={`flex gap-2 overflow-x-auto pb-4 w-fit transtion duration-400`}
    >
      <Button
        onClick={() => handleClick(null)}
        className={`border border-gray-600 focus:border-black/10 hover:bg-black/10 hover:border-black/10 
          ${active === "All Types" ? "bg-black/10 border-black/10" : ""}`}
      >
        All Types
      </Button>
      {content}
    </div>
  );
}

export default CategoriesSeaction;
