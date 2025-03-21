import { useEffect, useState } from "react";
import Search from "./components/Search";
import GameCard from "./components/GameCard";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const getGames = async () => {
    //   const response = await fetch(
    //     `http://localhost:3000/api/games?search="mario"`
    //   );
    //   const data = await response.json();
    //   console.log(data);
    // };
    // getGames();
  }, []);

  return (
    <main className="w-full p-2 flex flex-col items-center">
      <Search />
      <div className="w-full max-w-3xl grid grid-cols-2 gap-5 xs:grid-cols-2 md:grid-cols-3">
        <GameCard
          name="Hollow Knight"
          coverLink="https://media.rawg.io/media/resize/1920/-/screenshots/9f9/9f9a0edd1478facde5209abe4000c015.jpg"
        />
        <GameCard
          name="Hollow Knight"
          coverLink="https://media.rawg.io/media/resize/1920/-/screenshots/9f9/9f9a0edd1478facde5209abe4000c015.jpg"
        />
        <GameCard
          name="Hollow Knight"
          coverLink="https://media.rawg.io/media/resize/1920/-/screenshots/9f9/9f9a0edd1478facde5209abe4000c015.jpg"
        />
        <GameCard
          name="Hollow Knight"
          coverLink="https://media.rawg.io/media/resize/1920/-/screenshots/9f9/9f9a0edd1478facde5209abe4000c015.jpg"
        />
        <GameCard
          name="Hollow Knight"
          coverLink="https://media.rawg.io/media/resize/1920/-/screenshots/9f9/9f9a0edd1478facde5209abe4000c015.jpg"
        />
      </div>
    </main>
  );
}

export default App;
