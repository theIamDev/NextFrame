// src/app/(public)/page.tsx
import HomeFeatures from "@/features/home/HomeFeatures";
import HomeLayout from "@/layout/HomeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <HomeFeatures />
    </HomeLayout>
  );
}
