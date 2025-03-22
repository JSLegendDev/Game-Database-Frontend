import { useEffect, useState } from "react";
import Search from "./components/Search";
import GameCard from "./components/GameCard";
import useFetch from "./hooks/useFetch";
import { fetchGames } from "./api";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, loading, fetchData, error, reset } = useFetch(() =>
    fetchGames({ query: searchQuery })
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
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
      <div className="w-full max-w-3xl grid grid-cols-2 gap-5 xs:grid-cols-2 md:grid-cols-3">
        {data ? (
          data.results.map((game) =>
            game.added > 100 ? (
              <GameCard
                name={game.name}
                coverLink={game.background_image}
                playtime={game.playtime || 0}
              />
            ) : null
          )
        ) : (
          <p className="text-white">Search a game!</p>
        )}
      </div>
    </main>
  );
}

export default App;
