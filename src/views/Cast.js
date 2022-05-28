import React, { Component } from "react";
import ApiMovie from "../services/ApiMovie";

export default class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    const query = `movie/${this.props.match.params.movieId}/credits?`;
    ApiMovie.fetchMovieDb(query).then((res) =>
      this.setState({ cast: [...res.cast].slice(0, 6) })
    );
  }
  render() {
    return (
      this.state.cast.length > 0 && (
        <>
          <div>
            <ul>
              {this.state.cast.map((actor) => (
                <li key={actor.id}>
                  {actor.profile_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                      alt={actor.name}
                    />
                  ) : (
                    <></>
                    // <img src={logo} alt="" />
                  )}
                  <p>{actor.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )
      // <></>
    );
  }
}
