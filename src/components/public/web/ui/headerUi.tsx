"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface NavLink {
  label: string;
  href: string;
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

export default function HeaderUI({ logo, links, rightContent }: HeaderUIProps) {
  return (
    <header className="bg-gray-400 text-white p-4">
      <nav className="flex items-center justify-between">
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
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mr-4 text-white no-underline hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {rightContent && <div>{rightContent}</div>}
      </nav>
    </header>
  );
}
