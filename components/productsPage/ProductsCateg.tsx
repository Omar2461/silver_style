"use client";

import { useSidebar } from "@/context/SidebarContext";

function ProductsCateg() {
  const categories = [
    "All Products",
    "Neacklace",
    "Bracelet",
    "Earrings",
    "Ring",
  ];

  const { toggleSidebar } = useSidebar();
  const renderLinks = categories.map((el, idx) => (
    <li key={idx} className="hover:text-gray-300 cursor-pointer" onClick={()=>{toggleSidebar()}}>
      {el}
    </li>
  ));

  return (
    <ul className="flex flex-col space-y-5 px-4 py-5 text-xl">{renderLinks}</ul>
  );
}

export default ProductsCateg;
