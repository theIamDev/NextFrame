"use client";

import { ReactNode } from "react";

interface FooterUIProps {
  logo?: {
    src: string;
    alt: string;
    href?: string;
  };
  links: { label: string; href: string }[];
  copyright: ReactNode;
}

export default function FooterUI({ logo, links, copyright }: FooterUIProps) {
  return (
    <footer className="bg-[#eee] py-4 text-center text-sm text-black">
      <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6 mb-2">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </a>
        ))}
      </div>
      <p>{copyright}</p>
    </footer>
  );
}
