import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { fetchGameData } from "../api";

export default function GameDetails({ currentGame, goBack }) {
  const [currentScreenshot, setCurrentScreenshot] = useState(
    currentGame.short_screenshots[1] || null
  );
  const [description, setDescription] = useState([]);

  const { data, loading, fetchData, error, reset } = useFetch(() =>
    fetchGameData({ gameSlug: currentGame.slug })
  );

  useEffect(() => {
    (async () => {
      console.log("call API to get more details");
      await fetchData();
    })();
  }, []);

  useEffect(() => {
    if (data) {
      const rawDescription = data.description_raw;
      const paragraphs = rawDescription.split("\n\n");

      setDescription(paragraphs);
    }
  }, [data]);

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
        <div className="">
          {data && (
            <div className="text-gray-300">
              {description.map((paragraph) => (
                <p className="mt-2">{paragraph}</p>
              ))}
            </div>
          )}
          {currentGame.genres.map((genre) => (
            <span className="text-gray-300" key={genre.name}>
              {genre.name}
            </span>
          ))}
          <div className="w-full flex flex-col items-center p-4">
            <div
              className="w-full max-w-3xl h-full max-h-96 overflow-hidden border-4 border-red-400 outline rounded-md"
              key={currentScreenshot.id}
            >
              <img
                className="object-cover w-full h-full"
                src={currentScreenshot.image}
                loading="lazy"
              />
            </div>
          </div>

          {currentGame.platforms.map((platform) => (
            <span key={platform.platform.name} className="text-gray-300">
              {platform.platform.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
