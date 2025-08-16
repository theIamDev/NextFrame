"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
  cta?: boolean;
}

interface HeaderUIProps {
  logo?: {
    src: string;
    alt: string;
    href?: string;
    width?: number;
    height?: number;
  };
  links: NavLink[];
  rightContent?: ReactNode;
}

export default function HeaderUI({
  logo,
  links,
  rightContent,
}: HeaderUIProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const isDark = document.documentElement.classList.contains("dark");
      setTheme(isDark ? "dark" : "light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileOpen ? "hidden" : "";
    }
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-gray-400 dark:bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {logo && (
            <Link href={logo.href || "/"} className="mr-8 inline-block">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width || 100}
                height={logo.height || 40}
              />
            </Link>
          )}

          <nav className="hidden md:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-white no-underline hover:underline ${
                  link.cta ? "font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {rightContent && <div className="hidden md:block">{rightContent}</div>}

          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-500 dark:hover:bg-gray-700"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <button
            className="md:hidden p-2 rounded hover:bg-gray-500 dark:hover:bg-gray-700"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer - always opens from RIGHT */}
      <div
        className={`fixed inset-0 z-40 transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        <aside
          ref={panelRef}
          className="absolute top-0 right-0 h-full p-4 bg-gray-400 dark:bg-gray-900 w-64 shadow-lg"
        >
          <div className="flex items-center justify-between mb-4">
            {logo && (
              <Link href={logo.href || "/"} onClick={() => setMobileOpen(false)}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 100}
                  height={logo.height || 40}
                />
              </Link>
            )}
            <button onClick={() => setMobileOpen(false)}>
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-white no-underline hover:underline ${
                  link.cta ? "font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            {rightContent && <div className="mt-4">{rightContent}</div>}
          </nav>
        </aside>
      </div>
    </header>
  );
}
