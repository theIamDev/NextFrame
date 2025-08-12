// src/components/public/web/features/base/header.tsx
"use client";

import React from "react";
import HeaderUI, { NavLink } from "@/components/public/web/ui/headerUi";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const logo = {
    src: "/images/next.svg", // put your logo in public/images/next.svg
    alt: "NextFrame",
    href: "/",
    text: "NextFrame",
  };

  const links: NavLink[] = [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      submenu: [
        { label: "Web Development", href: "/services/web" },
        { label: "Mobile Apps", href: "/services/mobile" },
        { label: "AI/ML", href: "/services/ai" },
      ],
    },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
    { label: "Disclaimer", href: "/disclaimer" },
  ];

  const rightContent = (
    <div className="flex items-center gap-3">
      <a href="/get-quote" className="hidden sm:inline-block px-4 py-2 bg-primary text-white rounded-md hover:opacity-95">
        Get Quote
      </a>
      <ThemeToggle />
    </div>
  );

  return <HeaderUI logo={logo} links={links} rightContent={rightContent} />;
};

export default Header;
