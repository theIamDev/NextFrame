// components/public/web/layout/HomeLayout.tsx
"use client";

import Hero from "@/components/public/web/features/home/Hero";
import HomeFeatures from "@/components/public/web/features/home/HomeFeatures";

export default function HomeLayout() {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero — header is rendered in the public layout (app/(public)/layout.tsx) */}
      <Hero />

      {/* Features section (anchor uses scroll-mt to respect sticky header) */}
      <section id="features" className="scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 md:px-12 lg:px-20">
          <h2 className="text-2xl font-semibold mb-6">Our Features</h2>
          <HomeFeatures />
        </div>
      </section>
    </section>
  );
}
