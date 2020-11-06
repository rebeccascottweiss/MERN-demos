const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // "{PATH}" will be replaced with the field name, here that will be "name"
      required: [true, "{PATH} is required."],
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters"],
    },
    population: {
      type: Number,
      required: [true, "{PATH} is required."],
      min: [0, "{PATH} must be {MIN} at minimum"],
    },
    imgUrl: {
      type: String,
      required: [true, "{PATH} is required"],
    },
  },
  { timestamps: true }
);

/**
 * Tell mongoose what we want our model to be called
 * It will take the string and pluralize it for the
 * collection name. The Schema will enforce the
 * structure on this model when we try to create or
 * update it.
 */
const City = mongoose.model("City", CitySchema);

module.exports = City;
