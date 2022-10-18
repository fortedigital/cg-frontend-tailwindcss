import React from "react";
import logo from "../../assets/forte_analog_logo_full.png";

const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-lg font-bold hover:underline underline-offset-4"
    >
      {children}
    </a>
  );
};

function Header() {
  return (
    <header className="bg-retro-brown  px-8 py-2 text-white">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between">
        <a href="/">
          <img src={logo} className="h-16" alt="Forte Analog logo" />
        </a>
        <div className="flex gap-x-8">
          <Link href="/om-oss">Om oss</Link>
          <Link href="/prosjekter">Tjenester</Link>
          <Link href="/prosjekter">Prosjekter</Link>
          {/* TODO: create Menu with Headless UI */}
          <Link href="/jobb">Jobb</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
