const controller = require("../controllers/offres.controller");

module.exports = function(app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin: *");
    

      next();
    });


  app.post("/api/entreprise/offres",controller.addOffre);
  app.get("/api/entreprise/offres/list",controller.ListOffres);
  app.get("/api/entreprise/offres/listActiver",controller.ListOffresActive);
  app.get("/api/entreprise/offres/listDesactiver",controller.ListOffresDesactive);

  app.get("/api/entreprise/ListoffresOne/:id", controller.ListOffresOne);
  app.put("/api/entreprise/updateOffre/:id", controller.updateOffre);
  app.delete("/api/entreprise/Delete/:id", controller.delete);


}