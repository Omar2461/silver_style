"use client";

import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";
import { Provider } from "react-redux";
import { store } from "../store";
import { SelectedProvider } from "@/context/SelectedContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <SelectedProvider>
            <SidebarProvider>
              {children}
              <div id="sidebar-root" />
            </SidebarProvider>
          </SelectedProvider>
        </Provider>
      </body>
    </html>
  );
}
