import React from "react";

import { Inter as FontSans } from "@next/font/google";

import "@styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
