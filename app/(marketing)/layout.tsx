import React from "react";

import { marketingConfig } from "config/marketing";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col border border-pink-600">
      <main className="flex-1">{children}</main>
    </div>
  );
}
