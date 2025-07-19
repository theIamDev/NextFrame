"use client";

import HomeFeatures from "@/components/public/web/features/home/HomeFeatures";

/**
 * HomeLayout - defines the structure for the homepage content.
 */
export default function HomeLayout() {
  return (
    <section className="min-h-screen px-4 py-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">
          Welcome to the Home Page
        </h1>
        <HomeFeatures />
      </div>
    </section>
  );
}
