"use client";

import Quantity from "@/components/ProductPage/Quantity";

function Page() {
  return (
    <div className="min-h-screen bg-[#f7f2eb] flex justify-center">
      <div className="w-full max-w-5xl px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-xl font-semibold">Cart</h1>
          <button className="text-sm border rounded-full px-3 py-1">
            ✕ Close
          </button>
        </div>

        {/* Info */}
        <div className="flex gap-3 text-sm text-gray-600 py-4">
          <span className="font-medium text-black">2 Items</span>
          <span>It's in the bag. We'll hold it for an hour</span>
        </div>

        {/* Cart Item */}
        <div className="flex gap-4 bg-[#f7f2eb] border-b pb-6">
          <img
            src="/product.jpg"
            alt="Product"
            className="w-28 h-36 object-cover rounded"
          />

          <div className="flex-1">
            <div className="flex justify-between">
              <h2 className="font-semibold">Minimalist Ceramic Vase</h2>
              <button className="text-lg">✕</button>
            </div>

            <p className="text-sm text-gray-600 mt-1">Color: Maroon</p>
            <p className="text-sm text-gray-600">Size: 86 Cm</p>

            <div className="flex items-center justify-between mt-4">
              <span className="font-semibold text-lg">$64</span>

              {/* <div className="flex items-center gap-3 border rounded-full px-3 py-1">
                <button onClick={handleDec}>-</button>
                <span>{counter}</span>
                <button onClick={handleInc}>+</button>
              </div> */}
              <Quantity />
            </div>
          </div>
        </div>

        {/* Total + Checkout */}
        <div className="sticky bottom-0 bg-[#f7f2eb] pt-6 mt-10 border-t">
          <div className="flex justify-between text-lg font-semibold mb-4">
            <span>Total</span>
            <span>$128.00</span>
          </div>

          <button className="w-full bg-black text-white py-4 rounded-lg text-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
