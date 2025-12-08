import Image from "next/image";

import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CgShoppingBag } from "react-icons/cg";

import NavItems from "./NavItems";
import Link from "next/link";
import Menu from "./Menu";

function Header() {


  return (
    
    <div className="flex w-full justify-between items-center lg:text-[20px] xl:text-[23px] pr-5 transition-all duration-500">
      <div>
        <Menu className="md:hidden" />
        <NavItems className="hidden md:flex" />
      </div>

      <Link href="/">
        <Image
          src="/silverStyle.svg"
          className="rounded-full md:mr-20 mr-32 cursor-pointer transition-all duration-500"
          width={40}
          height={40}
          priority
          alt="Site logo"
        />
      </Link>

      <div className="flex gap-7 mt-2 text-black ">
        <CiSearch className="cursor-pointer" />
        <CiHeart className="cursor-pointer" />
        <CgShoppingBag className="cursor-pointer" />
      </div>
    </div>
  );
}
export default Header;
