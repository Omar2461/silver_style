"use client";

import { useState } from "react";

import { FaCheck } from "react-icons/fa";

function SideBar() {
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

  const renderAccessories = Accessories.map((el, idx) => {
    return (
      <li key={idx} className="flex justify-between">
        <span>{el}</span>
        <span
          className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-400 ${
            selected.includes(el) ? "bg-gray-200" : "bg-black/10"
          }`}
        >
          <input
            type="checkbox"
            onChange={() => handleClick(el)}
            checked={selected.includes(el)}
            className="absolute opacity-0 cursor-pointer"
          />
          {selected.includes(el) && <FaCheck />}
        </span>
      </li>
    );
  });

  return (
    <aside className="hidden md:block bg-black/10 p-4 rounded-2xl shadow h-fit md:w-65 lg:w-75 xl:w-90 hover:scale-105 
    transtion duration-400 ease-in-out">
      <h3 className="font-semibold mb-2">Accessories</h3>
      <ul className="space-y-2 mb-4">{renderAccessories}</ul>
    </aside>
  );
}

export default SideBar;
