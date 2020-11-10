import logo from "./logo.svg";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import Posts from "./views/Posts";
import SinglePost from "./views/SinglePost";
import NewPost from "./views/NewPost";
import EditPost from "./views/EditPost";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/posts">All Posts</Link>
          <Link to="/posts/new">New Posts</Link>
        </nav>
      </header>

      <Router>
        <Posts path="/posts" />
        <SinglePost path="/posts/:id" />
        <NewPost path="/posts/new" />
        <EditPost path="/posts/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
