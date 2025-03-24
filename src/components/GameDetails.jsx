import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { fetchGameData } from "../api";

export default function GameDetails({ currentGame, goBack }) {
  const { data, loading, fetchData, error, reset } = useFetch(() =>
    fetchGameData({ gameSlug: currentGame.slug })
  );

  useEffect(() => {
    (async () => {
      console.log("call API to get more details");
      await fetchData();
    })();
  }, []);

  return (
    <div>
      <button
        className="bg-blue-400 rounded-md p-2
      "
        onClick={goBack}
      >
        Go Back
      </button>
      <div className="mt-4">
        <div className="w-full relative">
          <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-80"></div>
          <h1 className="text-white text-2xl absolute top-5 left-5">
            {currentGame.name}
          </h1>
          <img
            className="w-full h-40 object-cover rounded-md"
            src={currentGame.background_image}
          />
        </div>
        <div>
          {data && <p className="text-white">{data.description_raw}</p>}
          {currentGame.genres.map((genre) => (
            <span className="text-white" key={genre.name}>
              {genre.name}
            </span>
          ))}
          <div className="w-full flex flex-col justify-center p-4">
            {currentGame.short_screenshots.map((screenshot) =>
              screenshot.id !== -1 ? (
                <img
                  key={screenshot.id}
                  src={screenshot.image}
                  loading="lazy"
                />
              ) : null
            )}
          </div>

          {currentGame.platforms.map((platform) => (
            <span key={platform.platform.name} className="text-white">
              {platform.platform.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
