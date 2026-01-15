import Image from "next/image";

import { CgShoppingBag } from "react-icons/cg";

function HeaderItems() {
  return (
    <>
      <a href="./">
        <Image
          src="/silverStyle.svg"
          className="rounded-full cursor-pointer transition-all duration-500"
          width={40}
          height={40}
          priority
          alt="Site logo"
        />
      </a>

      <input
        type="text"
        placeholder="Search"
        className={`w-1/3 rounded-full px-4 py-2 border border-gray-600 shadow-sm  md:mr-0
            focus:outline-none focus:border-black/10 focus:bg-black/10 hover:bg-black/10
             hover:border-black/10 transition-all duration-500`}
      />
      <div className="flex gap-6 items-center">
        <a className="flex space-x-1 cursor-pointer hover:scale-105 transtion duration-400 ease-in-out">
          <span>
            <CgShoppingBag className="text-2xl" />
          </span>
          <span>Cart</span>
        </a>
      </div>
    </>
  );
}

export default HeaderItems;
