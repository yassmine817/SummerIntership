const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require(".././Backend/config/db.config");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(this.corsOptions));



// parse requests of content-type - application/json
const db = require("../Backend/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://localhost:27017/summerIntern`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// simple route
app.get("/" ,(req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});





// routes
require("../Backend/routes/auth.routes")(app);
require("../Backend/routes/offres.routes")(app);
require("../Backend/routes/entreprises.routes")(app);

//require("./app/routes/user.routes")(app);
//require("./app/routes/chef.routes")(app);




// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "student"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "entreprise"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });

}
