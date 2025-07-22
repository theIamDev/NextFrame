// app/(public)/layout.tsx
"use client";

import Header from "@/components/public/web/features/base/header";
import Footer from "@/components/public/web/features/base/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
