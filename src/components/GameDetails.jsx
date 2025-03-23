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
      <div>
        <h1 className="text-white">{currentGame.name}</h1>
        <img src={currentGame.background_image} />
        <div>
          {data && <p className="text-white">{data.description_raw}</p>}
          {currentGame.genres.map((genre) => (
            <span className="text-white" key={genre.name}>
              {genre.name}
            </span>
          ))}
          {currentGame.short_screenshots.map((screenshot) =>
            screenshot.id !== -1 ? (
              <img key={screenshot.id} src={screenshot.image} loading="lazy" />
            ) : null
          )}
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
