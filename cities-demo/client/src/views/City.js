import React, { useEffect, useState } from "react";

import axios from "axios";

const City = (props) => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/cities/" + props.id)
      .then((res) => {
        console.log("get all cities", res);
        setCity(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.id]);

  if (city === null) {
    return "Loading..";
  }
  return (
    <div key={city._id} className="row mb-2 justify-content-center">
      <div className="col-md-9 p-2 shadow border rounded text-center">
        <h3>{city.name}</h3>
        <p>Population: {city.population}</p>
        <img
          src={city.imgUrl}
          alt={city.name}
          width="100%"
          className="rounded img-thumbnail"
        />
      </div>
    </div>
  );
};

export default City;
