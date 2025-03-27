import { useEffect, useState } from "react";
import Search from "./components/Search";
import GameCard from "./components/GameCard";
import useFetch from "./hooks/useFetch";
import { fetchGames } from "./api";
import Spinner from "./components/Spinner";
import GameDetails from "./components/GameDetails";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showGameDetails, setShowGameDetails] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);

  const { data, loading, fetchData, error, reset } = useFetch(() =>
    fetchGames({ query: searchQuery })
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        setShowGameDetails(false);
        setCurrentGame(null);
        await fetchData();
        return;
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <main className="w-full p-2 flex flex-col items-center">
      <Search
        query={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {!loading && !showGameDetails ? (
        <div className="w-full max-w-3xl grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data ? (
            data.results.map(
              (game) =>
                game.added > 30 && (
                  <GameCard
                    key={game.slug}
                    name={game.name}
                    coverLink={game.background_image}
                    playtime={game.playtime}
                    genres={game.genres}
                    onClick={() => {
                      setCurrentGame(game);
                      setShowGameDetails(true);
                    }}
                  />
                )
            )
          ) : (
            <p className="text-white">Search a game!</p>
          )}
        </div>
      ) : showGameDetails ? (
        <div className="w-full max-w-3xl">
          <GameDetails
            currentGame={currentGame}
            goBack={() => {
              setShowGameDetails(false);
              setCurrentGame(null);
            }}
          />
        </div>
      ) : (
        <Spinner />
      )}
    </main>
  );
}

export default App;
