import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <section style={{ padding: "2rem" }}>
      {children}
    </section>
  );
}
