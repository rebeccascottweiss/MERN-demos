import React, { useState } from "react";

import { navigate } from "@reach/router";
import axios from "axios";

const NestedNewCityExample = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newCity = {
      // long-form key: value pattern
      name: name,
      // shorthand key value pair assignment when key name and var name are same
      population,
      imgUrl,
    };

    /**
     * this REQuest will go to server/routes/city.routes.js
     * then gets routed to a function (method) in controllers/city.controller.js
     * .then our server sends back a response with JSON data
     */
    axios
      .post("http://localhost:8000/api/cities", newCity)
      .then((res) => {
        const newCity = res.data;
        console.log(newCity);

        props.setCities([...props.cities, newCity]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="form-group">
          <label>Name: </label>
          <input
            onChange={(event) => {
              setName(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Population: </label>
          <input
            onChange={(event) => {
              setPopulation(event.target.value);
            }}
            type="number"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Image Url: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            className="form-control"
          />
        </div>

        <button className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default NestedNewCityExample;
