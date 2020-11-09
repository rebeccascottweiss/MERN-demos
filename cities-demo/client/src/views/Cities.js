import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

import NestedNewCityExample from "../components/NestedNewCityExample";

const Cities = (props) => {
  const [cities, setCities] = useState(null);

  // arg2 passed into useEffect is the empty array which means useEffect
  // should only be executed once when the component is loaded for the first time
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities")
      .then((res) => {
        console.log("get all cities", res);
        setCities(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleDelete(delId) {
    axios
      .delete("http://localhost:8000/api/cities/" + delId)
      .then((res) => {
        console.log("deleted city", res.data);

        const filteredCities = cities.filter((city) => {
          // return true to keep if it's NOT the delId
          return city._id !== delId;
        });

        setCities(filteredCities);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // database has not responded to our request for data yet..
  if (cities === null) {
    return "Loading...";
  }

  return (
    <div className="container">
      <div className="row">
        {/* 
          Extra example where the new city form is
          nested as a child component rather than
          a view with routing.

          Shows how to solve the following problem:
          submit form but the page does not update
          to display the new information.

          Solution: pass the parent's state to the child,
          so the child can update the state since
          the child knows when the form is submitted.
        */}
        <NestedNewCityExample cities={cities} setCities={setCities} />
      </div>
      {cities.map((city) => {
        return (
          <div key={city._id} className="row mb-2 justify-content-center">
            <div className="col-md-7 p-2 shadow border rounded text-center">
              <h3>
                <Link to={"/cities/" + city._id}>{city.name}</Link>
              </h3>
              <p>Population: {city.population}</p>
              <img
                src={city.imgUrl}
                alt={city.name}
                width="70%"
                className="rounded img-thumbnail"
                style={{ cursor: "pointer" }}
                onClick={(event) => {
                  navigate("/cities/" + city._id);
                }}
              />
              <div className="p-3">
                <button
                  onClick={(event) => {
                    handleDelete(city._id);
                  }}
                  className="btn btn-outline-danger mr-1"
                >
                  Delete
                </button>
                <Link to={`/cities/${city._id}/edit`}>
                  <span className="btn btn-outline-warning">Edit</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
