function page() {
  return (
    <div>
      {/* <header className="flex items-center justify-between px-4 md:px-10 py-4">
        <div className="flex items-center gap-4">
          <button className="md:hidden">☰</button>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-green-600">
              Sports
            </a>
            <a href="#" className="hover:text-green-600">
              Running
            </a>
            <a href="#" className="hover:text-green-600">
              Casuals
            </a>
          </nav>
        </div>

        <h1 className="font-bold text-lg">
          Shoe <span className="text-blue-500">Daisy</span>
        </h1>

        <div className="flex gap-4">
          <span>👤</span>
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </header> */}

      <main className="px-4 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* <!-- Product Image --> */}
          <div className="flex justify-center">
            <img
              src="/mnt/data/8c3ba07d-5df7-45cf-b3be-f12102a78520.jpg"
            //   alt="Nike Shoe"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* <!-- Product Details --> */}
          <div>
            {/* <h2 className="text-3xl font-bold">Nike</h2>
            <p className="text-gray-500 mt-1">Men's Shoe</p> */}

            {/* <!-- Rating --> */}
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-500">(105 reviews)</span>
            </div>

            {/* <!-- Quantity --> */}
            <div className="flex items-center gap-3 mt-6">
              <span className="font-medium">Quantity</span>
              <div className="flex border rounded">
                <button className="px-3">-</button>
                <span className="px-4">1</span>
                <button className="px-3">+</button>
              </div>
            </div>

            {/* <!-- Price --> */}
            <p className="text-3xl font-bold mt-6">$250</p>

            {/* <!-- Description --> */}
            {/* <p className="text-gray-600 mt-4 leading-relaxed text-sm">
              Bringing a new look to the Waffle sneaker family, the Nike Waffle
              One balances everything you love about heritage Nike running with
              fresh innovations. The updated Waffle outsole provides traction
              and support.
            </p> */}

            {/* <!-- Sizes --> */}
            <div className="mt-6">
              <p className="font-medium mb-2">Select Size</p>
              <div className="flex flex-wrap gap-3">
                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white">
                  5
                </button>
                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white">
                  6
                </button>
                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white">
                  7
                </button>
                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white">
                  8
                </button>
                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white">
                  9
                </button>
                <button className="border px-4 py-2 rounded hover:bg-black hover:text-white">
                  10
                </button>
              </div>
            </div>

            {/* <!-- Actions --> */}
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

        {/* <!-- Related Products --> */}
        {/* <section className="mt-16">
      <h3 className="text-xl font-bold mb-6">Related Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded shadow text-center">
          <img src="https://via.placeholder.com/150" className="mx-auto" />
          <p className="mt-2 font-medium">Adidas</p>
          <p className="font-bold">$250</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img src="https://via.placeholder.com/150" className="mx-auto" />
          <p className="mt-2 font-medium">Nike</p>
          <p className="font-bold">$250</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center">
          <img src="https://via.placeholder.com/150" className="mx-auto" />
          <p className="mt-2 font-medium">Nike</p>
          <p className="font-bold">$250</p>
        </div>
        <div className="bg-white p-4 rounded shadow text-center hidden md:block">
          <img src="https://via.placeholder.com/150" className="mx-auto" />
          <p className="mt-2 font-medium">Nike</p>
          <p className="font-bold">$250</p>
        </div>
      </div>
    </section> */}
      </main>
    </div>
  );
}

export default page;
