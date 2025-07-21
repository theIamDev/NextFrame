"use client";

import HeaderUI from "../../ui/headerUi"; // Correct relative path

const Header = () => {
  const logo = {
    src: "/next.svg",
    alt: "CLM Logo",
    href: "/",
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Contact", href: "/contact-us" }, // Changed /contact to /contact-us
    { label: "Inquiry", href: "/inquiry" },     // Added Inquiry link
    { label: "Disclaimer", href: "/disclaimer" }, // Added Disclaimer link
  ];

  return (
    <HeaderUI
      logo={logo}
      links={links}
      rightContent={
        <a href="/login" className="text-white no-underline hover:underline">
          Login
        </a>
      }
    />
  );
};

export default Header;