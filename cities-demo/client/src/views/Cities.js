import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link, navigate } from "@reach/router";

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

  // database has not responded to our request for data yet..
  if (cities === null) {
    return "Loading...";
  }

  return (
    <div className="container">
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
