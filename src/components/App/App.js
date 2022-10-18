import React from "react";
import Header from "../Header";
import ActionCard from "../ActionCard";

function App() {
  return (
    <div className="h-screen flex flex-col bg-retro-beige">
      <Header />
      <main className="grow max-w-6xl mx-auto px-8 py-8">
        <h1 className="text-8xl mx-auto text-center font-bold py-24">
          Drevet av gammeldags innovasjon
        </h1>
        <div className="grid grid-cols-2 gap-8">
          <ActionCard
            title="Om oss"
            description="Vi er et veldig interessant firma"
            href="/om-oss"
          />
          <ActionCard
            title="Tjenester"
            description="Vi tilbyr mange kule tjenester"
            href="/tjenester"
          />
          <ActionCard
            title="Prosjekter"
            description="Prosjektene våre er out of this world"
            href="/prosjekter"
          />
          <ActionCard
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
