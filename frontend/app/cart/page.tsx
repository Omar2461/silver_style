"use client";

// import { useSelector } from "react-redux";
// import { RootState } from "@/store";

const items = [
  { id: 1, name: "Silver Ring", price: 150, image: "/product.jpg", quantity: 1 },
  { id: 2, name: "Golden Necklace", price: 1100, image: "/product.jpg", quantity: 1 },
];

function Page() {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="min-h-screen bg-[linear-gradient(to_bottom,#ffc9a6_0%,#ffc9a6_5%,#DBDBDB_100%)]">
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-6">
          <h1 className="text-3xl font-semibold text-black">Cart</h1>
          <button className="rounded-full border border-slate-600 px-4 py-1 text-sm text-black transition hover:bg-white/50">
            ✕ Close
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_320px]">
          {/* Items */}
          <div>
            <p className="pb-4 text-sm text-gray-700">
              <span className="font-medium text-black">{items.length} Items</span>{" "}
              · It's in the bag. We'll hold it for an hour
            </p>

            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 overflow-hidden rounded-2xl bg-white p-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-28 rounded-xl object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-semibold text-black">{item.name}</h2>
                      <button className="text-lg text-gray-500 hover:text-black">✕</button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-violet-500 px-4 py-1 text-black">
                        ${item.price}
                      </span>

                      {/* Quantity */}
                      <div className="flex items-center gap-3 rounded-full border border-slate-600 px-3 py-1">
                        <button>-</button>
                        <span>{item.quantity}</span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary panel (same look as the Accessories box) */}
          <div className="h-fit rounded-2xl bg-[#d4a994]/50 p-6 shadow-md backdrop-blur-sm md:sticky md:top-6">
            <h2 className="mb-4 text-xl font-semibold text-black">Summary</h2>

            <div className="mb-2 flex justify-between text-black">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="mb-4 flex justify-between text-black">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="mb-6 flex justify-between border-t border-black/20 pt-4 text-lg font-semibold text-black">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full rounded-full bg-black py-3 text-lg text-white transition hover:bg-black/80">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;