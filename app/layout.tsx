import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as it's closer to the clean UI
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uncia Dashboard",
  description: "Marketing SaaS Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50 flex h-screen overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
            <Header />
            <div className="flex-1 overflow-y-auto p-8 scroll-smooth">
                {children}
            </div>
        </main>
      </body>
    </html>
  );
}