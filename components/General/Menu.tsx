"use client";

import { useEffect, useRef } from "react";

import { CiMenuKebab } from "react-icons/ci";

import { useSidebar } from "../../context/SidebarContext";

interface menuProps {
  className: string;
  Component: React.ForwardRefExoticComponent<React.RefAttributes<HTMLDivElement>>;
  children?: React.ReactNode;
}

function Menu({ className, children, Component }: menuProps) {
  const { isOpen, toggleSidebar } = useSidebar();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        toggleSidebar();
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <span>
      <CiMenuKebab
        className={`${className} ${isOpen ? "hidden" : ""}`}
        onClick={toggleSidebar}
      />
      <div
        className={`fixed z-40 ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <Component ref={menuRef}/>
      </div>
    </span>
  );
}
export default Menu;
