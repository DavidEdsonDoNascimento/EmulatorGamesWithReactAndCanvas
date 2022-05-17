import { Link } from "react-router-dom";

export const MenuNavigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/breakout">Pong Plataform</Link> |{" "}
      <Link to="/interativehr">Interative HR</Link> |{" "}
      <Link to="/about">About</Link>
    </nav>
  );
}