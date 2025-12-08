"use client";

import React from "react";
import { useRef, useEffect } from "react";

type Panelprops = {
  className?: string;
  children: React.ReactNode;
};

function Container({ className,children }: Panelprops) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <div
      ref={ref}
      className={`min-h-screen pt-10 pl-5 pr-5 xl:pl-20 xl:pr-20 xl:pb-10 lg:pr-20 lg:pl-20 md:pl-10 md:pr-10
   bg-[linear-gradient(to_bottom,#ffc9a6_0%,#ffc9a6_5%,#FFFFFF_100%)]
      transition ease-in-out duration-400 ${className}`}
    >
      {children}
    </div>
  );
}
export default Container;

// 2xl:bg-[linear-gradient(to_right,#FFF9F7_0%,#FFF9F7_65%,transparent_1%),linear-gradient(to_bottom,#176161_0%,#176161_80%,#FFF9F7_40%,#FFF9F7_100%)]
//      xl:bg-[linear-gradient(to_right,#FFF9F7_0%,#FFF9F7_65%,transparent_1%),linear-gradient(to_bottom,#FFE8D9_0%,#FFE8D9_75%,#FFF9F7_40%,#FFF9F7_100%)]
//      lg:bg-[linear-gradient(to_right,#FFF9F7_0%,#FFF9F7_65%,transparent_1%),linear-gradient(to_bottom,#FFE8D9_0%,#FFE8D9_64%,#FFF9F7_40%,#FFF9F7_100%)]
//      md:bg-[linear-gradient(to_right,#FFF9F7_0%,#FFF9F7_65%,transparent_1%),linear-gradient(to_bottom,#FFE8D9_0%,#FFE8D9_55%,#FFF9F7_40%,#FFF9F7_100%)]
// 173F4F