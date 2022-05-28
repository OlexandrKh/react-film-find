import React, { Component } from "react";
import queryString from "query-string";
import ApiMovie from "../services/ApiMovie";
import MoviesList from "../components/MoviesList";

export default class MoviesPage extends Component {
  state = {
    findStr: "",
    movies: [],
  };

  componentDidMount() {
    const { query: queryStr } = queryString.parse(this.props.location.search);
    if (this.props.location.search) {
      const query = `search/movie?query=${queryStr}&page=1&`;
      ApiMovie.fetchMovieDb(query).then((res) =>
        this.setState({ movies: [...res.results] })
      );
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = queryString.parse(prevProps.location.search);
    const { query: nextQuery } = queryString.parse(this.props.location.search);
    if (prevQuery !== nextQuery) {
      const query = `search/movie?query=${nextQuery}&page=1&`;
      ApiMovie.fetchMovieDb(query).then((res) =>
        this.setState({ movies: [...res.results] })
      );
    }
  }
  handleOnSubmit = (e) => {
    const { history, location } = this.props;
    e.preventDefault();
    history.push({
      ...location,
      search: `query=${this.state.findStr}`,
    });
  };
  handleOnChange = (e) => {
    const findStr = e.target.value;
    this.setState({ findStr });
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleOnSubmit}>
            <label>
              Найти фильм:
              <input
                type="text"
                onChange={this.handleOnChange}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
              ></input>
              <button type="submit">Find</button>
            </label>
          </form>
        </div>
        <MoviesList movies={this.state.movies}></MoviesList>
      </>
    );
  }
}
