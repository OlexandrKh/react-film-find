import React from "react";
import { Link, withRouter } from "react-router-dom";
import routes from "../routes";

function MoviesList({ movies, location }) {
  return (
    movies.length > 0 && (
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>
                <Link
                  to={{
                    pathname: `${routes.MoviesPage}/${movie.id}`,
                    state: { from: location },
                  }}
                >
                  {movie.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
export default withRouter(MoviesList);
