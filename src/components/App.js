import React from "react";
import Header from "./Header";
import LinkCard from "./LinkCard";

function App() {
  return (
    <div className="min-h-screen bg-retro-white">
      <Header />
      <main className="mx-auto max-w-6xl px-8 py-8">
        <h1 className="mx-auto pt-12 pb-20 text-center text-7xl font-bold">
          Drevet av gammeldags innovasjon
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <LinkCard
            title="Om oss"
            description="Vi er et veldig interessant firma"
            href="/om-oss"
          />
          <LinkCard
            title="Tjenester"
            description="Vi tilbyr mange kule tjenester"
            href="/tjenester"
          />
          <LinkCard
            title="Prosjekter"
            description="Prosjektene våre er out of this world"
            href="/prosjekter"
          />
          <LinkCard
            title="Jobb"
            description="Jobb hos oss er du snill"
            href="/jobb"
          />
        </div>
      </main>
    </div>
  );
}

export default App;
