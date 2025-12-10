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
      className={`min-h-screen pt-10 pl-5 pr-5 xl:pl-20 xl:pr-20 xl:pb-10 lg:pr-20 lg:pl-20 md:pl-10 md:pr-10 overflow-x-hidden 
      bg-[linear-gradient(to_bottom,#ffc9a6_0%,#ffc9a6_5%,#DBDBDB_100%)]
      transition ease-in-out duration-400 ${className}`}
    >
      {children}
    </div>
  );
}
export default Container;
