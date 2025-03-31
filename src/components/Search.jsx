import React, { useState } from "react";

export default function Search({ query, onChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-full max-w-4xl mb-4">
      <div className="flex my-2 rounded-md shadow-xl bg-gray-800 p-4">
        <img
          className="relative top-0.5 h-5 w-5"
          src="./search.svg"
          alt="search"
        />
        <input
          className="w-full focus:outline-none ml-2 text-gray-300"
          type="text"
          placeholder="Search a game"
          value={query}
          onChange={onChange}
        />
      </div>
      <h1 className="text-amber-50">{searchQuery}</h1>
    </div>
  );
}
