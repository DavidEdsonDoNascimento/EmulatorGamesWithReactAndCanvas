import './App.css';

import {
  BrowserRouter as Router,
  useRoutes
} from "react-router-dom";
import { Breackout } from "./Games/Breakout";
import { InterativeHR } from './Games/InterativeHR';
import { MenuNavigation } from "./MenuNavigation";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "breakout", element: <Breackout /> },
    { path: "interativehr", element: <InterativeHR /> },
    { path: "about", element: <About /> }
  ]);
  return routes;
};

export default function AppWrapper() {
  return (
    <Router>
      <MenuNavigation />
      <App />
    </Router>
  );
};


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}