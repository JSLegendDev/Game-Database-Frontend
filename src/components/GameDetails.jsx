import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { fetchGameData } from "../api";
import ScreenshotCarousel from "./ScreenshotCarousel";
import Spinner from "./Spinner";

function createParagraphs(inputString) {
  // Split the string into sentences using regex to match sentence-ending punctuation (., !, ?)
  const sentences = inputString.match(/[^.!?]+[.!?]+/g) || [];

  // Initialize an array to hold the paragraphs
  const paragraphs = [];

  // Loop through the sentences and create paragraphs with a max of 3 sentences
  for (let i = 0; i < sentences.length; i += 3) {
    // Join the next 3 sentences to form a paragraph
    const paragraph = sentences
      .slice(i, i + 3)
      .join(" ")
      .trim();
    paragraphs.push(paragraph);
  }

  return paragraphs;
}

export default function GameDetails({ currentGame, goBack }) {
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
      const paragraphs = createParagraphs(rawDescription);
      // const paragraphs = rawDescription.split("\n\n");

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
      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
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
            <div className="w-full flex flex-col items-center p-4 h-96">
              {/* <div
              className="w-full max-w-3xl h-full max-h-96 overflow-hidden border-4 border-red-400 outline rounded-md"
              key={currentScreenshot.id}
            >
              <img
                className="object-cover w-full h-full"
                src={currentScreenshot.image}
                loading="lazy"
              />
            </div> */}
              {currentGame.short_screenshots.length !== 0 && (
                <ScreenshotCarousel
                  screenshots={currentGame.short_screenshots.slice(0)} // exclude the first screenshot since it's the same as the cover
                />
              )}
            </div>

            {currentGame.platforms.map((platform) => (
              <span key={platform.platform.name} className="text-gray-300">
                {platform.platform.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
