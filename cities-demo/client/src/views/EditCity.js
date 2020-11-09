import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

const EditCity = (props) => {
  const [name, setName] = useState("");
  const [population, setPopulation] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        console.log("get city to edit", res);
        setName(res.data.name);
        setPopulation(res.data.population);
        setImgUrl(res.data.imgUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.id]);

  function handleSubmit(event) {
    event.preventDefault();

    const editedCity = {
      name: name,
      population: population,
      imgUrl: imgUrl,
    };

    axios
      .put("http://localhost:8000/api/cities/" + props.id, editedCity)
      .then((res) => {
        console.log("edit city res", res);
        navigate("/cities/" + props.id);
      })
      .catch((err) => {
        // console.log(err);
        console.log(err.response);
        setErrors(err.response?.data?.errors);
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
            value={name}
          />
          {errors?.name && (
            <span style={{ color: "red" }}>{errors.name?.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Population: </label>
          <input
            onChange={(event) => {
              setPopulation(event.target.value);
            }}
            type="number"
            className="form-control"
            value={population}
          />
          {errors?.population && (
            <span style={{ color: "red" }}>{errors.population?.message}</span>
          )}
        </div>

        <div className="form-group">
          <label>Image Url: </label>
          <input
            onChange={(event) => {
              setImgUrl(event.target.value);
            }}
            type="text"
            className="form-control"
            value={imgUrl}
          />
          {errors?.imgUrl && (
            <span style={{ color: "red" }}>{errors.imgUrl?.message}</span>
          )}
        </div>

        <button className="btn btn-outline-warning">Submit</button>
      </form>
    </div>
  );
};

export default EditCity;
