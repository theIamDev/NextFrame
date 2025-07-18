// src/app/page.tsx
import PublicLayout from "./(public)/layout";
import HomeFeatures from "@/features/home/HomeFeatures";
import HomeLayout from "@/layout/HomeLayout";

export default function WrappedHomePage() {
  return (
    <PublicLayout>
      <HomeLayout>
        <HomeFeatures />
      </HomeLayout>
    </PublicLayout>
  );
}
