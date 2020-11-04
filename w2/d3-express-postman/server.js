const port = 8000;

const express = require("express");

const app = express();

// req.body WILL BE UNDEFINED WITHOUT THIS
app.use(express.json());

// const homeRouteCallback = (req, res) => {
//   console.log(req);
//   res.send("Hello from express server.");
// };

// app.get("/", homeRouteCallback);

// same as above but the callback function is not saved in a variable
app.get("/", (req, res) => {
  res.json({
    flight_number: 200,
    description: "We made it to Mars, losers. But we lost a few crew members.",
    status: "success",
  });
});

app.get("/api/cities", (req, res) => {
  res.json({
    dateOfRequest: new Date(),
    cities: [
      {
        id: 1,
        name: "Aogashima",
        population: 170,
      },
      {
        id: 2,
        name: "Longyearbyen",
        population: 2144,
      },
      {
        id: 3,
        name: "Kennedy Meadows",
        population: 28,
      },
    ],
  });
});

app.post("/api/cities", (req, res) => {
  // we have no DB yet, so pretend we just saved a city in the DB

  console.log(req.body);
  res.json({
    status: "success",
    city: req.body,
  });
});

// :id is a route parameter, it is a placeholder for whatever id will be provided when this url
// is requested, the param name will be added as a key to req.params object
app.delete("/api/cities/:id", (req, res) => {
  console.log(req.params);

  res.json({
    status: "success",
    msg: `Deleted city id: ${req.params.id}`,
  });
});

app.put("/api/cities/:id", (req, res) => {
  res.json({
    status: "success",
    msg: `Updated city id: ${req.params.id}`,
  });
});

app.get("/api/cities/:id", (req, res) => {
  res.json({
    status: "success",
    city: {
      id: req.params.id,
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port} for REQuests to RESpond to.`);
});
