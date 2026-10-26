"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingBasket } from "react-icons/ci";

import Skelton from "../General/Skelton";
import Button from "../General/Button";

import { useSelected } from "@/context/SelectedContext";
import { useTypeSelected } from "@/context/TypeSelectedContext";

import { useProductStore } from "@/store";

function ProductsSeaction() {
  const { fetchProducts, products, loading, error } = useProductStore();
  const { selected: selectedMatrial } = useTypeSelected();
  const { selected } = useSelected();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const selectedProducts = products.filter((product) => {
    const matchesCategory =
      !selected?.length  || selected?.includes(product.departmentId);

    const matchesMaterial =
      selectedMatrial === undefined ||
      selectedMatrial === product.productTypeId;
    return matchesCategory && matchesMaterial;
  });

  let renderProducts;

  if (loading) {
    renderProducts = (
      <Skelton
        className="md:w-40 lg:w-50 xl:w-70 w-40"
        times={products?.length}
      />
    );
  } else if (error) {
    renderProducts = <div>Error happend</div>;
  } else {
    renderProducts = selectedProducts?.map((product, idx) => {
      return (
        <Link key={idx} href={`/products/${product.id}`}>
          <div className="relative hover:scale-105 transtion duration-400 ease-in-out md:w-40 lg:w-50 xl:w-70 w-40 cursor-pointer">
            <div className="w-full h-40 bg-black/20 rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
                width={300}
                height={300}
                priority
              />
            </div>
            <div className="relative flex flex-col items-center rounded-xl h-16 md:h-18 bg-[#FFFFFF] ">
              <h4 className="font-semibold w-30 text-center">{product.name}</h4>
              <Button className="absolute bottom-2 text-gray-600 border hover:bg-gray-600 hover:text-white w-18 md:w-25 space-x-1 flex justify-center ">
                <span>
                  <CiShoppingBasket className="text-lg md:text-xl" />
                </span>
                <span className="text-sm md:text-md">${product.price}</span>
              </Button>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <main
      className={`flex flex-wrap justify-around space-y-4 space-x-5 md:mt-0 md:space-x-3 md:space-y-8 transtion duration-400`}
    >
      {renderProducts}
    </main>
  );
}

export default ProductsSeaction;
