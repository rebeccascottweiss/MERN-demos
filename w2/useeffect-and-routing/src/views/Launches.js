import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const Launches = (props) => {
  const [launches, setLaunches] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((res) => {
        console.log(res);
        setLaunches(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (launches === null) {
    return (
      <img
        src="https://hollywoodunlocked.com/wp-content/uploads/2020/05/giphy-1-1.gif"
        alt="Loading"
      />
    );
  }

  return (
    <div>
      {launches.map((launch) => {
        return (
          <div key={launch.flight_number}>
            {/* <Link to={`/launches/${launch.flight_number}`}> */}
            <Link to={"/launches/" + launch.flight_number}>
              <h2>Mission: {launch.mission_name}</h2>
            </Link>
            <p>{launch.details}</p>
            <p>Date: {launch.launch_date_local}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Launches;
