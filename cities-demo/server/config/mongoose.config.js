const mongoose = require("mongoose");

module.exports = (dbName) => {
  mongoose
    .connect(`mongodb://localhost/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log(`Successfully connected ${dbName}`);
    })
    .catch((err) => {
      console.error(err);
    });
};
