const cityController = require("../controllers/city.controller");

// LEADING SLASHES IN URLS REQUIRED

// export a function to be called and passed the app
module.exports = (app) => {
  // in DJango: path("api/cities", views.allCities)
  app.get("/api/cities", cityController.getAll);
  // :id is a url paramter that will be added to req.params.id
  app.get("/api/cities/:id", cityController.getOne);
  app.post("/api/cities", cityController.create);
  app.delete("/api/cities/:id", cityController.delete);
  app.put("/api/cities/:id", cityController.update);
};
