import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import HomePage from "./views/HomePage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import MoviesPage from "./views/MoviesPage";

import Reviews from "./views/Reviews";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={routes.Home} exact component={HomePage} />
        <Route path={routes.MoviesPage} exact component={MoviesPage} />
        {/* <Route path={routes.Cast} component={Cast} /> */}
        {/* <Route path={routes.Reviews} component={Reviews} /> */}
        <Route path={routes.MovieDetailsPage} component={MovieDetailsPage} />
        <Route path="*" component={HomePage} />
      </Switch>
    </>
  );
}
export default App;
