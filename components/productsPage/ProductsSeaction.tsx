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
        className="hover:scale-105 transtion duration-400 ease-in-out"
      >
        <div className="w-full h-50 bg-black/20 rounded-lg"></div>
        <div className="flex flex-col items-center rounded-xl p-2 bg-[#FFFFFF] ">
          <h4 className="font-semibold mb-2">{product.title}</h4>
          <Button className="text-gray-600 border border-violet-500 space-x-2">
            <span>
              <CiShoppingBasket className="text-2xl" />
            </span>{" "}
            <span>${product.price}</span>
          </Button>
        </div>
      </div>
    );
  });

  return (
    <main className="col-span-9 grid grid-cols-3 gap-6">{renderProducts}</main>
  );
}

export default ProductsSeaction;
