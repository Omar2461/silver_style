"use client";

import { forwardRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSidebar } from "@/context/SidebarContext";

interface SideBarProps {
  children?: React.ReactNode;
  className?: string;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(({ className,children }, ref) => {
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
      className={`fixed top-0 left-0 h-full w-84 z-50 flex pt-10 bg-white
        transition-transform duration-500 ease-in-out ${className}
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {children}
    </div>,
    container
  );
});

SideBar.displayName = "SideBar";
export default SideBar;
