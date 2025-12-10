"use client";

import { useEffect, useRef } from "react";

import { CiMenuKebab } from "react-icons/ci";
import SideBar from "./SideBar";

import { useSidebar } from "../../context/SidebarContext";
import SideBarEl from "./SideBarEl";

function Menu({ className }: { className: string }) {
  const { isOpen, toggleSidebar } = useSidebar();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      if (isOpen&&menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggleSidebar();
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div>
      <CiMenuKebab
        className={`${className} ${isOpen ? "hidden" : ""}`}
        onClick={toggleSidebar}
      />
      <SideBar ref={menuRef} > <SideBarEl/></SideBar>
    </div>
  );
}
export default Menu;
