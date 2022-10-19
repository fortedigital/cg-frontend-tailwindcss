import React from "react";
import logo from "../assets/forte_analog_logo_full.png";

const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-lg font-bold underline-offset-4 hover:underline"
    >
      {children}
    </a>
  );
};

function Header() {
  return (
    <header className="bg-retro-brown-light">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-2 text-white">
        <a href="/">
          <img src={logo} className="h-16" alt="Forte Analog logo" />
        </a>
        <div className="flex gap-x-8">
          <Link href="/om-oss">Om oss</Link>
          <Link href="/prosjekter">Tjenester</Link>
          <Link href="/prosjekter">Prosjekter</Link>
          <Link href="/jobb">Jobb</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
