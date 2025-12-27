"use client";

import Dropdown from "@/components/myFiles/Dropdown";
import Container from "@/components/General/Container";
import Input from "@/components/General/Input";
import Panel from "@/components/General/Panel";

import { useState } from "react";

import { useGetCategoriesQuery } from "@/store";
import { useGetTypesQuery } from "@/store";
import { useAddProductMutation } from "@/store";

import Button from "@/components/General/Button";

type Product = {
  name: string;
  typeId: number;
  categoryId: number;
  price: number;
};

type SelectedItem = {
  [title: string]: number;
};

function Page() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<SelectedItem>({});

  const {
    data: categoryData,
    isFetching: categoryIsfetchinf,
    error: categoryError,
  } = useGetCategoriesQuery();
  const { data: typesData, isFetching, error } = useGetTypesQuery();
  const [addProduct, { isLoading, isSuccess, error: resultError, data }] =
    useAddProductMutation();

  const types = typesData || [];
  const categories = categoryData || [];

  const handleNamechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePricechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPrice(Number(value));
  };

  const handleSelect = (title: string, itemId: number) => {
    setSelectedItems((prev) => ({
      ...prev,
      [title]: itemId,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleClick = () => {
    addProduct({
      name,
      categoryId: selectedItems.category,
      typeId: selectedItems.type,
      price,
    });

    setName("");
    setPrice(0);
    setSelectedItems({});
  };

  return (
    <Container className="bg-white">
      <h1 className=" text-xl font-bold lg:text-3xl lg:font-bold md:text-3xl md:font-bold transtion duration-400">
        Create New Product
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-5">
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <Input
            className={`bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl lg:pl-3 pr-3`}
            value={name}
            onChange={handleNamechange}
            placeholder="Enter Product name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Type</label>
          <Dropdown
            optionTiltle="type"
            isFetching={isFetching}
            error={error}
            className="bg-gray-200 p-5"
            options={types}
            selectFunc={handleSelect}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Category</label>
          <Dropdown
            optionTiltle="category"
            isFetching={categoryIsfetchinf}
            error={categoryError}
            className="bg-gray-200 p-5"
            options={categories}
            selectFunc={handleSelect}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Price</label>
          <Input
            className={`bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl lg:pl-3 pr-3`}
            type="number"
            value={price || ""}
            onChange={handlePricechange}
            placeholder="Enter product price"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Description</label>
          <Panel className="bg-gray-200 text-black md:w-90 lg:w-90 rounded-xl">
            <textarea
              className="w-full h-30 p-4 transtion duration-400"
              placeholder="Enter product description"
              name=""
              id=""
            ></textarea>
          </Panel>
        </div>

        {isSuccess ? (
          <div className="bg-blue-600 text-white">Added successfully</div>
        ) : (
          <Button
            onClick={handleClick}
            className="bg-blue-600 text-white w-20 hover:bg-gray-400 hover:text-black"
          >
            Create
          </Button>
        )}
      </form>
    </Container>
  );
}

export default Page;
