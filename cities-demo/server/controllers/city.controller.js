// Trigger the code in city.model to be executed and export the model
const City = require("../models/city.model");

// export an object with a bunch of methods in it
module.exports = {
  // key: value pair pattern, long-form for methods
  create: function (req, res) {
    console.log("create method executed");

    City.create(req.body)
      .then((city) => {
        // city is the city from the DB now, which has a DB _id, createdAt, etc.
        // send it back in the response to the client
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // shorthand method key value pair
  getAll(req, res) {
    console.log("getAll method executed");

    // .find always returns an array
    City.find()
      .then((cities) => {
        res.json(cities);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getOne(req, res) {
    console.log("getOne method executed", "url params:", req.params);

    City.findById(req.params.id)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  delete(req, res) {
    console.log("delete method executed", "url params:", req.params);

    City.findByIdAndDelete(req.params.id)
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params);

    // req.body is the new updated info from the submitted form
    City.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      // return the updated object rather than the old info
      new: true,
    })
      .then((city) => {
        res.json(city);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};
