// src/components/public/web/ui/headerUi.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavSubLink {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  submenu?: NavSubLink[];
}

interface LogoProps {
  src?: string;
  alt?: string;
  href: string;
  text?: string;
}

interface HeaderUIProps {
  logo: LogoProps;
  links: NavLink[];
  rightContent?: React.ReactNode;
}

export default function HeaderUI({ logo, links, rightContent }: HeaderUIProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setActiveDropdown(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background dark:bg-gray-900 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href={logo.href} className="flex items-center gap-2">
          {logo.src ? (
            <Image src={logo.src} alt={logo.alt || "Logo"} width={36} height={36} />
          ) : (
            <span className="text-lg font-semibold">{logo.text || logo.alt || "Logo"}</span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((item) => {
            const hasSub = item.submenu && item.submenu.length > 0;
            return (
              <div
                key={`desktop-${item.href}-${item.label}`}
                className="relative"
                onMouseEnter={() => hasSub && setActiveDropdown(item.label)}
                onMouseLeave={() => hasSub && setActiveDropdown(null)}
              >
                {hasSub ? (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === item.label ? null : item.label))
                    }
                    className="flex items-center gap-1 hover:text-primary"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {hasSub && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 border rounded shadow-lg">
                    {item.submenu!.map((sub) => (
                      <Link
                        key={`sub-${item.href}-${sub.href}`}
                        href={sub.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          {rightContent && <div className="ml-4">{rightContent}</div>}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          {/* Panel */}
          <aside className="absolute top-0 right-0 w-80 max-w-full h-full bg-white dark:bg-gray-900 shadow-lg p-4 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b pb-4">
              <Link href={logo.href} onClick={() => setMobileOpen(false)}>
                {logo.src ? (
                  <Image src={logo.src} alt={logo.alt || "Logo"} width={32} height={32} />
                ) : (
                  <span className="font-semibold">{logo.text || logo.alt || "Logo"}</span>
                )}
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto">
              {links.map((item) => (
                <div key={`mobile-${item.href}-${item.label}`} className="mb-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium"
                    >
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <button
                        onClick={() =>
                          setActiveDropdown((prev) =>
                            prev === item.label ? null : item.label
                          )
                        }
                        className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu && activeDropdown === item.label && (
                    <div className="mt-2 pl-4 space-y-1">
                      {item.submenu.map((sub) => (
                        <Link
                          key={`mobile-sub-${item.href}-${sub.href}`}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          className="block text-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
