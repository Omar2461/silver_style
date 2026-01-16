"use client";

import { forwardRef } from "react";

import { useGetCategoriesQuery } from "@/store";

import { FaCheck } from "react-icons/fa";
import { useSelected } from "@/context/SelectedContext";

interface SideBarProps {
  className?: string;
}

interface CategoryType {
  name: string;
  id: number;
}

const SideBar = forwardRef<HTMLElement, SideBarProps>(({ className }, ref) => {
  const { selected, toggleItem } = useSelected();

  const { data: categories, error, isFetching } = useGetCategoriesQuery();

  const Accessories = categories?.map((el) => el);

  const handleClick = (item: CategoryType) => {
    toggleItem(item.id);
  };

  const renderAccessories = Accessories?.map((el, idx) => (
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
          checked={selected?.includes(el.id)}
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
