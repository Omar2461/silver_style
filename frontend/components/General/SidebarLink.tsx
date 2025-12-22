import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SidebarLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

function SidebarLink({ href, className, children }: SidebarLinkProps) {
  const path = usePathname();
  const isActive = href === path;

  return (
    <Link
      href={href}
      className={`flex items-center w-60 gap-3 p-2 rounded-lg duration-400 ease-in-out hover:scale-110 font-medium hover:bg-gray-500
         ${isActive ? "bg-gray-500" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}

export default SidebarLink;
