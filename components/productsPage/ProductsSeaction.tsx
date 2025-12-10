import Button from "../General/Button";

import { CiShoppingBasket } from "react-icons/ci";

function ProductsSeaction() {
  const products = [
    { id: 1, title: "Product Title 1", price: 100.0 },
    { id: 2, title: "Product Title 2", price: 150.0 },
    { id: 3, title: "Product Title 3", price: 200.0 },
    { id: 4, title: "Product Title 4", price: 250.0 },
    { id: 5, title: "Product Title 5", price: 300.0 },
    { id: 6, title: "Product Title 6", price: 350.0 },
  ];

  const renderProducts = products.map((product, idx) => {
    return (
      <div
        key={idx}
        className="relative hover:scale-105 transtion duration-400 ease-in-out md:w-40 lg:w-50 xl:w-70 w-40  "
      >
        <div className="w-full h-40 bg-black/20 rounded-lg"></div>
        <div className="relative flex flex-col items-center rounded-xl h-16 md:h-18 bg-[#FFFFFF] ">
          <h4 className="font-semibold w-30 ">{product.title}</h4>
          <Button className="absolute bottom-2 text-gray-600 border border-violet-500 w-18 md:w-25 space-x-1 flex justify-center ">
            <span>
              <CiShoppingBasket className="text-lg md:text-xl" />
            </span>{" "}
            <span className="text-sm md:text-md">${product.price}</span>
          </Button>
        </div>
      </div>
    );
  });

  return (
    <main className="flex flex-wrap justify-around space-y-4 md:space-x-3 md:space-y-8">{renderProducts}</main>
  );
}

export default ProductsSeaction;
