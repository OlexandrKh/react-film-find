const Path = {
  Home: "/",
  MoviesPage: "/movies", // - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
  MovieDetailsPage: "/movies/:movieId", //- компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
  Cast: "/movies/:movieId/cast", // - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
  Reviews: "/movies/:movieId/reviews", // - компонент <Reviews>, информация об обзорах. Рендерится
};
export default Path;
