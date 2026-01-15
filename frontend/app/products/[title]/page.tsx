"use client";

import { useState, useEffect } from "react";

import Container from "@/components/General/Container";
import HeaderItems from "@/components/General/HeaderItems";

import { useGetProductByIdQuery, useGetCategoryByIdQuery } from "@/store";
import Quantity from "@/components/ProductPage/Quantity";
import { skipToken } from "@reduxjs/toolkit/query";

type Props = {
  params: {
    title: string;
  };
};

function Product(props: Props) {
  const [productId, setProductId] = useState<number | null>(null);

  const { data: product, isLoading } = useGetProductByIdQuery(productId!, {
    skip: productId === null,
  });

  const { data: category } = useGetCategoryByIdQuery(
    product?.categoryId ?? skipToken
  );

  useEffect(() => {
    const getId = async () => {
      const { title } = await props.params;
      setProductId(parseInt(title));
    };
    getId();
  }, [props.params]);

  const renderProduct = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      const renderSizes = category?.sizes?.map((size, idx) => {
        return (
          <button
            key={idx}
            className="border px-4 py-2 rounded hover:bg-black hover:text-white"
          >
            {size}
          </button>
        );
      });

      return (
        <>
          <p className="text-3xl font-bold mt-6">${product?.price}</p>

          {/* <!-- Description --> */}
          <p className="text-gray-600 mt-4 leading-relaxed text-sm">
            {product?.description}
          </p>

          <div className="mt-6">
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex flex-wrap gap-3"> {renderSizes}</div>
          </div>
        </>
      );
    }
  };

  return (
    <Container className="bg-[linear-gradient(to_bottom,#ffc9a6_0%,#ffc9a6_5%,#DBDBDB_100%)]">
      <header className="flex justify-between items-center mb-6">
        <HeaderItems />
      </header>

      <main className="px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <!-- Product Image --> */}
          <div className="flex justify-center">
            <img
              
              //   alt="Nike Shoe"
              className="w-full max-w-md object-contain"
            />
          </div>

          <div>
            <Quantity />
            
            {renderProduct()}

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded w-full sm:w-auto">
                Buy Now
              </button>
              <button className="border px-6 py-3 rounded w-full sm:w-auto">
                Add to Favorite
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-4">Delivery: 5–7 days</p>
          </div>
        </div>
      </main>
    </Container>
  );
}

export default Product;
