const controller = require("../controllers/entreprises.controller");
const { verifySignUp } = require("../middlewares");

module.exports = function(app) {
  app.use(function (req, res, next) {
      next();
    });


  app.get("/api/entreprises/list", controller.showdétails);
  app.put("/api/entreprises/updateEntreprise/:id", controller.updateProfil);
  app.get("/api/entreprises/SearchEntreprise/:name", controller.SearchEntName);

 
}