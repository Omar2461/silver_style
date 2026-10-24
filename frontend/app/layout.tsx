"use client";

import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { Provider } from "react-redux";
import { SelectedProvider } from "@/context/SelectedContext";
import { TypeSelectedProvider } from "@/context/TypeSelectedContext";

import localFont from "next/font/local";

const font = localFont({
  src: "./fonts/Canela-Light-Trial.otf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <TypeSelectedProvider>
          <SelectedProvider>
            <SidebarProvider>
              {children}
              <div id="sidebar-root" />
            </SidebarProvider>
          </SelectedProvider>
        </TypeSelectedProvider>
      </body>
    </html>
  );
}
