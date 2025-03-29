export default function GameCard({
  coverLink,
  name,
  playtime,
  genres,
  onClick,
}) {
  return (
    <div className="bg-gray-800 rounded-md flex flex-col" onClick={onClick}>
      <img
        src={coverLink}
        loading="lazy"
        className="w-full h-40 object-cover rounded-t-md"
      />

      <h1 className="p-2 text-gray-300 text-lg">{name}</h1>
      {playtime !== 0 && (
        <div className="flex items-center gap-2 m-2">
          <img src="./clock-fill.svg" className="text-gray-300" />
          <p className=" text-gray-300">{playtime} Hours</p>
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
