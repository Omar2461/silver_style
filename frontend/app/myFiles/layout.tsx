"use client";

import Menu from "@/components/General/Menu";
import { SidebarProvider } from "@/context/SidebarContext";
import SideBar from "@/components/myFiles/SideBar";
import SideBarElements from "@/components/myFiles/SideBarElements";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <Menu Component={SideBar}>
            <SideBarElements />
          </Menu>
          {children}
          <div id="sidebar-root" />
        </SidebarProvider>
      </body>
    </html>
  );
}

export default Layout;
