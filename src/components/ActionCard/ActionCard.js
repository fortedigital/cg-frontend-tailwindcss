import React from "react";

function ActionCard({ title, description, href }) {
  return (
    <div className="flex h-52 flex-col justify-between rounded-xl border bg-retro-beige p-4">
      <div>
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <a
        className="w-fit rounded-md bg-retro-gold py-2 px-4 font-bold text-white transition-colors hover:bg-retro-red"
        href={href}
      >
        Les mer →
      </a>
    </div>
  );
}

export default ActionCard;
