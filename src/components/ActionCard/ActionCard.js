import React from "react";

function ActionCard({ title, description, href }) {
  return (
    <div className="rounded-xl bg-white h-52 p-4 flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p>{description}</p>
      </div>
      <a
        className="bg-retro-gold text-white py-2 px-4 font-bold rounded-md w-fit transition-colors hover:bg-retro-red"
        href={href}
      >
        Les mer →
      </a>
    </div>
  );
}

export default ActionCard;
