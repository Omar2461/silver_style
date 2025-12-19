"use client";

import { useSelected } from "@/context/SelectedContext";
import Button from "../General/Button";

import { CiShoppingBasket } from "react-icons/ci";
import { useGetProductsQuery } from "@/store";

function ProductsSeaction() {
  const { selected } = useSelected();
  const {data}=useGetProductsQuery(selected);


  const renderProducts = data?.map((product) => {
    return (
      <div
        key={product.id}
        className="relative hover:scale-105 transtion duration-400 ease-in-out md:w-40 lg:w-50 xl:w-70 w-40  "
      >
        <div className="w-full h-40 bg-black/20 rounded-lg"></div>
        <div className="relative flex flex-col items-center rounded-xl h-16 md:h-18 bg-[#FFFFFF] ">
          <h4 className="font-semibold w-30 ">{product.name}</h4>
          <Button className="absolute bottom-2 text-gray-600 border border-violet-500 w-18 md:w-25 space-x-1 flex justify-center ">
            <span>
              <CiShoppingBasket className="text-lg md:text-xl" />
            </span>
            <span className="text-sm md:text-md">${product.price}</span>
          </Button>
        </div>
      </div>
    );
  });
  return (
    <main
      className={`flex flex-wrap justify-around space-y-4 md:mt-0 md:space-x-3 md:space-y-8 transtion duration-400`}
    >
      {renderProducts}
    </main>
  );
}

export default ProductsSeaction;
