import React from "react";

export default function GameCard({ coverLink, name }) {
  return (
    <div className="bg-gray-800 rounded-md shadow-inner shadow-light-100/10">
      <img src={coverLink} className="w-full h-40 object-cover rounded-t-md" />
      <h1 className="p-5 text-gray-300">{name}</h1>
    </div>
  );
}
