"use client";

import Menu from "../General/Menu";
import ProductsCateg from "./ProductsCateg";
import SideBar from "../General/SideBar";
import HeaderItems from "../General/HeaderItems";

function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <Menu className="md:hidden" Component={SideBar}>
        <ProductsCateg />
      </Menu>

      <HeaderItems />

    </header>
  );
}

export default Header;
