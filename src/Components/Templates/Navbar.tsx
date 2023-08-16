import Link from 'next/link';
import React from 'react';
import ColorModeToggle from '../Molecules/ColorModeToggle';

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-7xl justify-between">
      {/* logo */}
      <Link href="/" className="text-2xl font-bold">
        Navbar
      </Link>
      <div className="flex items-center">
        {/* navlinks */}
        <NavLinksDesktop />
        {/* Auth */}
        <button>Log in</button>
        <button>Sign up</button>
        {/* Theme toggle */}
        <ColorModeToggle />
        {/* Toggle on mobile */}
      </div>
    </nav>
  );
};

export default Navbar;

export const NavLinksDesktop = () => {
  return (
    <ul className="hidden md:flex">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/glossary">Glossary</Link>
      </li>
    </ul>
  );
};
