"use client";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Container from "@/components/General/Container";
import HeaderItems from "@/components/General/HeaderItems";
import Button from "@/components/General/Button";
import Quantity from "@/components/ProductPage/Quantity";
import { skipToken } from "@reduxjs/toolkit/query";

import {
  useGetProductByIdQuery,
  useGetCategoryByIdQuery,
  addToCart,
} from "@/store";
import Image from "next/image";
import Skelton from "@/components/General/Skelton";

type Props = {
  params: {
    title: string;
  };
};

function Product(props: Props) {
  const [productId, setProductId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductByIdQuery(productId!, {
    skip: productId === null,
  });

  const { data: category } = useGetCategoryByIdQuery(
    product?.categoryId ?? skipToken,
  );

  useEffect(() => {
    const getId = async () => {
      const { title } = await props.params;
      setProductId(title);
    };
    getId();
  }, [props.params]);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addToCart({
        _id: product?._id,
        name: product?.name,
        price: product?.price,
        image: product?.image,
        quantity: quantity,
      }),
    );
  };

  const handleChange = (num: number) => {
    setQuantity(num);
  };

  const renderProduct = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      const renderSizes = category?.sizes?.map((size, idx) => {
        return (
          <button
            key={idx}
            className="border px-4 py-2 rounded hover:bg-black hover:text-white cursor-pointer"
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
            {product?.name.toLowerCase().includes("ring") ? (
              ""
            ) : (
              <>
                <p className="font-medium mb-2">Select Size</p>
                <div className="flex flex-wrap gap-3">{renderSizes}</div>
              </>
            )}
          </div>
        </>
      );
    }
  };

  let content;
  if (error) {
    content = <div>Error loading categories</div>;
  } else {
    content = (
      <>
        {product?.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full max-w-md object-contain rounded-2xl"
            priority
          />
        ) : (
          <Skelton className="rounded-2xl h-[400px] w-[400px]" times={1} />
        )}

        <div>
          <Quantity onChange={handleChange} />

          {renderProduct()}

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button
              onClick={handleClick}
              className="bg-black text-white hover:bg-gray-500 px-6 py-3 w-full sm:w-auto transtion duration-400"
            >
              Buy Now
            </Button>
            <Button className="border px-6 py-3 w-full sm:w-auto hover:bg-black hover:text-white">
              Add to Favorite
            </Button>
          </div>

          <p className="text-sm text-gray-500 mt-4">Delivery: 5–7 days</p>
        </div>
      </>
    );
  }

  return (
    <Container className="bg-[linear-gradient(to_bottom,#ffc9a6_0%,#ffc9a6_5%,#DBDBDB_100%)]">
      <header className="flex justify-between items-center mb-6">
        <HeaderItems />
      </header>

      <main className="px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <!-- Product Image --> */}
          {content}
        </div>
      </main>
    </Container>
  );
}

export default Product;
