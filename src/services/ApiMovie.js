const KEY = "189de549f8a757089f82fa92809038d7";
const BASE_URL = "https://api.themoviedb.org/3/";

function fetchMovieDb(strQuery) {
  const url = BASE_URL + strQuery + `api_key=${KEY}&language=ru`;
  return fetch(url).then((res) => res.json());
  // .then((res) => res.results);
}
const ApiMovie = { fetchMovieDb };
export default ApiMovie;
