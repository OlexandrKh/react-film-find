import { NavLink } from "react-router-dom";
import routes from "../routes";

export default function Navigation(props) {
  return (
    <>
      <div>
        <ul>
          <li>
            <NavLink to={routes.Home}>Home</NavLink>
          </li>
          <li>
            <NavLink to={routes.MoviesPage}>Movies</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
