import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex gap-4 justify-center">
        <Link href="/">Home</Link>
        <Link href="/about-us">About</Link>
        <Link href="/contact-us">Contact</Link>
        <Link href="/inquiry">Inquiry</Link>
        <Link href="/disclaimer">Disclaimer</Link>
      </nav>
    </header>
  );
};

export default Header;
