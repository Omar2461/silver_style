import Image from "next/image";

import { CiShoppingBasket } from "react-icons/ci";

function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <a href="./">
        <Image
          src="/silverStyle.svg"
          className="rounded-full md:mr-20 mr-32 cursor-pointer transition-all duration-500"
          width={40}
          height={40}
          priority
          alt="Site logo"
        />
      </a>

      <input
        type="text"
        placeholder="Search"
        className="w-1/3 rounded-full px-4 py-2 border border-gray-600 shadow-sm 
        focus:outline-none focus:border-black/10 focus:bg-black/10 hover:bg-black/10 hover:border-black/10 transition-all duration-500"
      />
      <div className="flex gap-6 items-center">
        <span className="flex space-x-1">
          <span>
            <CiShoppingBasket className="text-2xl" />
          </span>
          <span> Cart</span>
        </span>
      </div>
    </header>
  );
}

export default Header;
