// app/(public)/layout.tsx

"use client";

import React, { ReactNode } from "react";
import Header from "@/components/public/web/features/base/header";
import Footer from "@/components/public/web/features/base/footer";

/**
 * PublicLayout wraps public-facing pages with a consistent header and footer.
 */
interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
