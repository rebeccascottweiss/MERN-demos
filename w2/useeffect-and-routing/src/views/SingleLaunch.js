import React, { useEffect, useState } from "react";

import axios from "axios";

/**
 * <SingleLaunch path="/launches/:id" />
 * The actual id that is provided in the URL
 * Will be passed in to props.
 */
const SingleLaunch = (props) => {
  console.log(props);
  const [launch, setLaunch] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches/" + props.id)
      .then((res) => {
        console.log(res);
        setLaunch(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [props.id]);

  if (launch === null) {
    return (
      <img
        src="https://hollywoodunlocked.com/wp-content/uploads/2020/05/giphy-1-1.gif"
        alt="Loading"
      />
    );
  }

  return (
    <div key={launch.flight_number}>
      <h2>Mission: {launch.mission_name}</h2>
      <p>{launch.details}</p>
      <p>Date: {launch.launch_date_local}</p>
      <p>Rocket Name: {launch.rocket.rocket_name}</p>
      <p>Rocket Type: {launch.rocket.rocket_type}</p>

      <h3>Ships:</h3>
      <ul>
        {launch.ships.map((ship, i) => {
          return <li key={i}>{ship}</li>;
        })}
      </ul>
    </div>
  );
};

export default SingleLaunch;
