import "./globals.css";
import { SidebarProvider } from "@/context/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          {children}
          <div id="sidebar-root" />
        </SidebarProvider>
      </body>
    </html>
  );
}
