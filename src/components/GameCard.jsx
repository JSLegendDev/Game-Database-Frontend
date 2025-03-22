import React from "react";

export default function GameCard({ coverLink, name, playtime, genres }) {
  return (
    <div className="bg-gray-800 rounded-md">
      <img src={coverLink} className="w-full h-40 object-cover rounded-t-md" />

      <h1 className="p-2 text-gray-300">{name}</h1>
      <div className="flex items-center gap-2 mx-2">
        <img src="./clock-fill.svg" className="text-gray-300" />
        <p className=" text-gray-300">{playtime} Hours</p>
      </div>
      <div className="flex flex-row gap-2 m-2">
        {genres.map((genre) => (
          <span className="bg-red-800 rounded-full px-2 text-gray-300">
            {genre.name}
          </span>
        ))}
      </div>
    </div>
  );
}
