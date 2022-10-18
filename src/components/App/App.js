import React from "react";
import Header from "../Header";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="bg-retro-beige grow">
        <h1>Heading</h1>
        <p>Content</p>
      </main>
    </div>
  );
}

export default App;
