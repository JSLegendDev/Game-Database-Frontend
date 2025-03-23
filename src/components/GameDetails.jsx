export default function GameDetails({ name, coverLink, genres, screenshots }) {
  useEffect(() => {
    console.log("call API to get more details");
  }, []);

  return (
    <div>
      <h1 className="text-white">{currentGame.name}</h1>
      <img src={currentGame.background_image} />
    </div>
  );
}
