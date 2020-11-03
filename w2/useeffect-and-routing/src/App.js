import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Product from "./components/Product";
import Homepage from "./views/Homepage";
import Secondary from "./views/Secondary";
import Launches from "./views/Launches";
import SingleLaunch from "./views/SingleLaunch";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div className="App">
      <Link to="/">Homepage</Link> | <Link to="/secondary">Secondary</Link> |{" "}
      <Link to="/launches">All Launches</Link>
      <hr />
      <Router>
        <Homepage path="/" />
        <Secondary path="/secondary" />
        <Launches path="/launches" />

        {/*
          :id is a URL Parameter, some id value will be inserted there when the URL is visited and available in props by the same name.

          This is like the urls.py /launches/<int:id>
        */}
        <SingleLaunch path="/launches/:id" />
        {/* noThrow means don't cause an error if they go to the wrong URL */}
        <Redirect from="/home" to="/" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
