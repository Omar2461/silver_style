"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { CgShoppingBag } from "react-icons/cg";

import { useGetProductsQuery } from "@/store";

function HeaderItems() {
  const [input, setInput] = useState<string | null>(null);

  const { data } = useGetProductsQuery({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const renderSearchredData = () => {
    if (!input) {
      return null;
    }
    const list = data
      ?.filter((el) => el.name.toLowerCase().includes(input.toLowerCase()))
      .map((el) => (
        <Link key={el._id} href={`/products/${el._id}`}>
          <li className="my-1 ml-4 mr-4 border p-2 rounded-xl hover:scale-105 transtion duration-400 ease-in-out">
            <span>{el.name}</span>
          </li>
        </Link>
      ));

    if (!list?.length) return null;

    return (
      <ul
        className="absolute top-full mt-1
          w-full
          bg-black/50
          text-white
          border rounded-xl
          shadow-lg
          z-50
          max-h-60 overflow-y-auto transtion duration-400 ease-in-out"
      >
        {list}
      </ul>
    );
  };

  return (
    <>
      <div className="absolute  ">
        <Link href="./">
          <Image
            src="/silverStyle.svg"
            className="rounded-full cursor-pointer transition-all duration-500"
            width={40}
            height={40}
            priority
            alt="Site logo"
          />
        </Link>
      </div>

      <div className="relative mx-auto w-full max-w-md px-4 ">
        <input
          type="text"
          placeholder="Search"
          value={input || ""}
          onChange={handleChange}
          className={`w-1/2 rounded-full px-4 py-2 border border-gray-600 shadow-sm ml-15 md:mr-0
            focus:outline-none focus:border-black/10 focus:bg-black/10 hover:bg-black/10
             hover:border-black/10 transition-all duration-500`}
        />
        {renderSearchredData()}
      </div>

      <div className="absolute right-15 ">
        <Link
          href="/cart"
          className="flex space-x-1 hover:scale-105 transtion duration-400 ease-in-out"
        >
          <span>
            <CgShoppingBag className="text-2xl" />
          </span>
          <span>Cart</span>
        </Link>
      </div>
    </>
  );
}

export default HeaderItems;
