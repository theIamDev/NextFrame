// src/ui/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#222", color: "white", padding: "1rem" }}>
      <nav>
        <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link href="/about-us">About</Link>
      </nav>
    </header>
  );
}
