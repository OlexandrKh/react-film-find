import React, { Component } from "react";
import { Link } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import ApiMovie from "../services/ApiMovie";

export default class HomePage extends Component {
  state = {
    trands: null,
  };

  componentDidMount() {
    const query = "trending/movie/day?";
    ApiMovie.fetchMovieDb(query).then((res) =>
      this.setState({ trands: [...res.results] })
    );
  }
  render() {
    const { trands } = this.state;
    return (
      trands && (
        <div>
          <h1>Сейчас в тренде:</h1>
          <MoviesList movies={trands} />
        </div>
      )
    );
  }
}
