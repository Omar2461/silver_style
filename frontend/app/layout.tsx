"use client";

import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { Provider } from "react-redux";
import { store } from "../store";
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
        <Provider store={store}>
          <TypeSelectedProvider>
            <SelectedProvider>
              <SidebarProvider>
                {children}
                <div id="sidebar-root" />
              </SidebarProvider>
            </SelectedProvider>
          </TypeSelectedProvider>
        </Provider>
      </body>
    </html>
  );
}
