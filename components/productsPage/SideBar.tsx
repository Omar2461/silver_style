"use client";

import { forwardRef, useState } from "react";
import { useSidebar } from "@/context/SidebarContext";
import { FaCheck } from "react-icons/fa";

interface SideBarProps {
  className?: string;
}

const SideBar = forwardRef<HTMLElement, SideBarProps>(({ className }, ref) => {
  const { isOpen } = useSidebar();
  const [selected, setSelected] = useState<string[]>([
    "Neaclace",
    "Bracelet",
    "Earrings",
    "Ring",
  ]);

  const Accessories = ["Neaclace", "Bracelet", "Earrings", "Ring"];

  const handleClick = (item: string) => {
    if (selected.includes(item)) {
      setSelected((prev) => prev.filter((i) => i !== item));
    } else {
      setSelected((prev) => [...prev, item]);
    }
  };

  const renderAccessories = Accessories.map((el, idx) => (
    <li key={idx} className="flex justify-between">
      <span>{el}</span>
      <span
        className={`w-5 md:w-6 md:h-6 rounded-lg flex items-center justify-center transition-all duration-400 ${
          selected.includes(el) ? "bg-gray-200" : "bg-black/10"
        }`}
      >
        <input
          type="checkbox"
          onChange={() => handleClick(el)}
          checked={selected.includes(el)}
          className="absolute opacity-0 cursor-pointer"
        />
        {selected.includes(el) && <FaCheck className="text-black" />}
      </span>
    </li>
  ));

  return (
    <aside
      ref={ref} 
      className={`${
        isOpen
          ? "bg-black/80 fixed shadow h-fit rounded-xl p-2 text-white top-10 left-2 w-[140px]"
          : "bg-black/10 md:p-4 md:rounded-2xl shadow h-fit md:w-65 lg:w-75 xl:w-90"
      } hover:scale-105 transition duration-400 ease-in-out ${className}`}
    >
      <h3 className="font-semibold mb-2">Accessories</h3>
      <ul className="space-y-2 mb-4">{renderAccessories}</ul>
    </aside>
  );
});

SideBar.displayName = "SideBar";
export default SideBar;
