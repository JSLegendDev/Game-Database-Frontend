import { useState } from "react";

export default function ScreenshotCarousel({ screenshots }) {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  return (
    <div
      className="w-full max-w-3xl h-full max-h-96 overflow-hidden border-4 border-red-400 outline rounded-md relative"
      key={screenshots[currentScreenshotIndex].id}
    >
      <button
        className="bg-blue-400 rounded-md px-4 py-2 absolute top-40 right-5 shadow-lg"
        onClick={() => {
          setCurrentScreenshotIndex((currentScreenshotIndex) => {
            if (currentScreenshotIndex < screenshots.length - 1) {
              return currentScreenshotIndex + 1;
            }

            return 0;
          });
        }}
      >
        {">"}
      </button>
      <button
        className="bg-blue-400 rounded-md px-4 py-2 absolute top-40 left-5 shadow-lg"
        onClick={() => {
          setCurrentScreenshotIndex((currentScreenshotIndex) => {
            if (currentScreenshotIndex > 0) {
              return currentScreenshotIndex - 1;
            }

            return screenshots.length - 1;
          });
        }}
      >
        {"<"}
      </button>

      <img
        className="object-contain w-full h-full"
        src={screenshots[currentScreenshotIndex].image}
        loading="lazy"
      />
    </div>
  );
}
