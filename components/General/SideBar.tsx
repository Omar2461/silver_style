"use client";

import { forwardRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SideBarEl from "./SideBarEl";
import { useSidebar } from "@/context/SidebarContext";

const SideBar = forwardRef<HTMLDivElement>((_, ref) => {
  const { isOpen } = useSidebar();
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const el = document.getElementById("sidebar-root");
    if (el) setContainer(el);
  }, []);

  if (!container) return null;

  return createPortal(
    <div
      ref={ref}
      className={`fixed bg-black/80 text-white top-0 left-0 h-full w-[250px]
        transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <SideBarEl />
    </div>,
    container
  );
});

SideBar.displayName = "SideBar";
export default SideBar;
