const API_ENDPOINT = "http://localhost:3000/api/";

export async function fetchGames({ query }) {
  const response = await fetch(`${API_ENDPOINT}games?search=${query}`);
  return await response.json();
}
