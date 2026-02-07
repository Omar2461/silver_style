"use client";

import { useSelected } from "@/context/SelectedContext";
import { useSidebar } from "@/context/SidebarContext";
import { useGetCategoriesQuery } from "@/store";

function ProductsCateg() {
  const { toggleSidebar } = useSidebar();

  const { data: categories, error, isFetching } = useGetCategoriesQuery();
  const { selected, toggleItem } = useSelected();

  const Accessories = categories?.map((el) => el);

  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;


  const renderLinks = Accessories?.map((el, idx) => (
    <li
      key={idx}
      onClick={() => {
        toggleSidebar();
        toggleItem(el._id)
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
