import { useEffect } from "react";

export default function GameCard({
  coverLink,
  name,
  playtime,
  genres,
  onClick,
}) {
  return (
    <div
      className="bg-gray-800 rounded-md flex flex-col relative"
      onClick={onClick}
    >
      <img
        src={coverLink}
        loading="lazy"
        className="w-full h-40 object-cover rounded-t-md"
      />

      <h1 className="p-2 text-gray-300 text-lg">{name}</h1>
      {playtime !== 0 && (
        <div className="flex items-center gap-2 mx-2 bg-gray-900 p-2 absolute top-2 right-0 rounded-md opacity-90">
          <img
            src="./clock-fill.svg"
            className="text-gray-300 max-w-xs max-h-xs"
          />
          <p className=" text-gray-300 text-sm whitespace-nowrap">
            {playtime} Hours
          </p>
        </div>
      )}

      <div className="flex flex-row flex-wrap gap-2 m-2 mt-auto">
        {genres.map((genre) => (
          <span className="genre-pill">{genre.name}</span>
        ))}
      </div>
    </div>
  );
}
