import React from "react";
import Product from "../components/Product";

const Homepage = (props) => {
  return (
    <div>
      <h2>This is my homepage VIEW</h2>
      <p>It may render multiple components because it is a whole page.</p>
      {/* this is a component that is PART of the homepage view, but it is not the WHOlE page */}
      {/* <Product /> */}
    </div>
  );
};

export default Homepage;
