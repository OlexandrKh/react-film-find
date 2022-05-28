import React, { Component } from "react";
import ApiMovie from "../services/ApiMovie";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const query = `movie/${this.props.match.params.movieId}/reviews?`;
    ApiMovie.fetchMovieDb(query).then((res) =>
      this.setState({ reviews: [...res.results] })
    );
  }
  render() {
    const { reviews } = this.state;
    return reviews && reviews.length > 0 ? (
      <div>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h1>{author}</h1>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Рецензий еще нет на этот фильм</p>
    );
  }
}
