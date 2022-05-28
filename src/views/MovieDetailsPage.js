import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import ApiMovie from "../services/ApiMovie";
import Cast from "./Cast";
import routes from "../routes";
import Reviews from "./Reviews";

export default class MovieDetailsPage extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    const movieId = this.props.match.params.movieId;
    const query = `movie/${movieId}?`;

    ApiMovie.fetchMovieDb(query).then((res) => this.setState({ movie: res }));
  }
  handleOnGoBack = () => {
    const { location, history } = this.props;
    // if (location.state) return history.push(location.state);
    // history.push(routes.Home);

    history.push(location?.state?.from || routes.Home);
  };

  render() {
    const { movie } = this.state;
    const { location, match } = this.props;
    return (
      movie && (
        <>
          <button onClick={this.handleOnGoBack}>Go back...</button>
          <div>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>
              Рейтинг:
              <span> {movie.vote_average} </span>
            </p>
            <p>
              Проголосовало:
              <span> {movie.vote_count} </span>
            </p>
            <h2>Описание:</h2>
            <p>{movie.overview}</p>
            <h2>Жанр:</h2>
            <ul>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <h2>Дополнительная информация:</h2>
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              Актерский состав
            </Link>
            <br />
            <Link to={`${match.url}/reviews`}>Рецензии</Link>
          </div>
          {/* Cast: */}
          <Route path={routes.Cast} component={Cast} />
          <Route path={routes.Reviews} component={Reviews} />
        </>
      )
    );
  }
}
