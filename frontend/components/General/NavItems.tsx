import Link from "next/link";
import React from "react";

function NavItems({ className }: { className: React.ReactNode }) {
  const items = [
    { title: "Home", link: "/" },
    { title: "Products", link: "/products" },
    { title: "About", link: "/about" },
    { title: "Contact", link: "/contact" },
  ];

  const renderItems = items.map((item, idx) => {
    return (
      <Link href={item.link} key={idx}>
        <li
          className="relative text-xl text-black hover:text-black cursor-pointer
             hover:after:w-6 after:transition-all after:duration-300 
             after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 
             after:bottom-0 after:w-0 after:h-0.5 after:bg-black after:rounded"
        >
          {item.title}
        </li>
      </Link>
    );
  });

  return <ul className={`gap-5 md:gap-3 lg:gap-6 xl:gap-6 2xl:gap-7  ${className}`}>{renderItems}</ul>;
}
export default NavItems;
