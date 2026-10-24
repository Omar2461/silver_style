"use client";

import { useEffect } from "react";

import { forwardRef } from "react";

import { useCategoryStore } from "@/store";

import { FaCheck } from "react-icons/fa";
import { useSelected } from "@/context/SelectedContext";
import Skelton from "../General/Skelton";

interface SideBarProps {
  className?: string;
}

interface CategoryType {
  name: string;
  id: number;
}

const SideBar = forwardRef<HTMLElement, SideBarProps>(({ className }, ref) => {
  const { selected, toggleItem } = useSelected();
  const { fetchCategories, categories, loading, error } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleClick = (item: CategoryType) => {
    toggleItem?.(item.id);
  };

  let renderAccessories;
  if (loading) {
    renderAccessories = (
      <Skelton
        className="md:w-40 lg:w-50 xl:w-70 w-40"
        times={categories?.length}
      />
    );
  } else if (error) {
    renderAccessories = <div>Error happend</div>;
  } else
    renderAccessories = categories?.map((el, idx) => (
      <li key={idx} className="flex justify-between">
        <span>{el.name}</span>
        <span
          className={`w-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center transition-all duration-400 ${
            selected?.includes(el.id) ? "bg-gray-200" : "bg-black/10"
          }`}
        >
          <input
            type="checkbox"
            onChange={() => handleClick(el)}
            checked={selected?.includes(el.id) || false}
            className="absolute opacity-0 cursor-pointer"
          />
          {selected?.includes(el.id) && <FaCheck className="text-black" />}
        </span>
      </li>
    ));

  return (
    <aside
      ref={ref}
      className={`${"bg-black/10 md:p-4 md:rounded-2xl shadow h-fit md:w-65 lg:w-75 xl:w-90"} hover:scale-105 transition duration-400 ease-in-out ${className}`}
    >
      <h3 className="font-semibold mb-2">Accessories</h3>
      <ul className="space-y-2 mb-4">{renderAccessories}</ul>
    </aside>
  );
});

SideBar.displayName = "SideBar";
export default SideBar;
