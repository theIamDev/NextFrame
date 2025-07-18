// src/ui/Layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
      {children}
    </div>
  );
}
