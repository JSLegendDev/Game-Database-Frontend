import { useState, useEffect } from "react";

export default function ScreenshotCarousel({ screenshots }) {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

  useEffect(() => {
    // trick to preload the images
    for (const screenshot of screenshots) {
      const img = new Image();
      img.src = screenshot.image;
    }
  }, []);

  return (
    <div
      className="bg-gray-800 rounded-lg w-full max-w-3xl h-full max-h-96 overflow-hidden relative"
      key={screenshots[currentScreenshotIndex].id}
    >
      <img
        className="bg-gray-200 rounded-full p-4 absolute top-40 right-5 shadow-xl"
        onClick={() => {
          setCurrentScreenshotIndex((currentScreenshotIndex) => {
            if (currentScreenshotIndex < screenshots.length - 1) {
              return currentScreenshotIndex + 1;
            }

            return 0;
          });
        }}
        src="./arrow-right.svg"
      />
      <img
        className="bg-gray-200 rounded-full p-4 absolute top-40 left-5 shadow-xl"
        onClick={() => {
          setCurrentScreenshotIndex((currentScreenshotIndex) => {
            if (currentScreenshotIndex > 0) {
              return currentScreenshotIndex - 1;
            }

            return screenshots.length - 1;
          });
        }}
        src="./arrow-left.svg"
      />

      <img
        className="object-contain w-full h-full"
        src={screenshots[currentScreenshotIndex].image}
        loading="lazy"
      />
    </div>
  );
}
