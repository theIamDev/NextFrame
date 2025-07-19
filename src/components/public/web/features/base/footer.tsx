"use client";

import FooterUI from "../../ui/footerUi";

const Footer = () => {
  const logo = {
    src: "/next.svg",
    alt: "CLM Footer Logo",
    href: "/",
  };

  const links = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  const copyright = `© ${new Date().getFullYear()} CLM Portal. All rights reserved.`;

  return <FooterUI logo={logo} links={links} copyright={copyright} />;
};

export default Footer;
