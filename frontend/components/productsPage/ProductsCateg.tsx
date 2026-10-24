"use client";

import { useSelected } from "@/context/SelectedContext";
import { useSidebar } from "@/context/SidebarContext";
import { useCategoryStore } from "@/store";

function ProductsCateg() {
  const { toggleSidebar } = useSidebar();
  const { selected, toggleItem } = useSelected();

const {categories,fetchCategories,error,loading}=useCategoryStore();

  const Accessories = categories?.map((el) => el);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;


  const renderLinks = Accessories?.map((el, idx) => (
    <li
      key={idx}
      onClick={() => {
        toggleSidebar();
        toggleItem(el.id)
      }}
      className="hover:text-gray-300 cursor-pointer"
    >
      {el.name}
    </li>
  ));

  return (
    <ul className="flex flex-col space-y-5 px-4 py-5 text-xl">{renderLinks}</ul>
  );
}

export default ProductsCateg;
