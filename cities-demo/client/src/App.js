import logo from "./logo.svg";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import NewCity from "./views/NewCity";
import Cities from "./views/Cities";
import City from "./views/City";

function App() {
  return (
    <div className="container">
      <nav className="row my-5">
        <Link to="/cities">
          {/* using bootstrap classes */}
          <span className="btn btn-sm btn-outline-primary mr-1">Cities</span>
        </Link>
        <Link to="/cities/new">
          <span className="btn btn-sm btn-outline-primary">New City</span>
        </Link>
      </nav>

      <Router>
        <Redirect from="/" to="/cities" noThrow="true" />
        {/* if any URL visited is not found, display this view component */}
        <NewCity path="/cities/new" />
        <Cities path="/cities" />
        <City path="/cities/:id" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
