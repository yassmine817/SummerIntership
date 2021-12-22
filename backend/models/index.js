const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./Student");
db.entreprises = require("./entreprises");
db.role = require("./role.model");

db.ROLES = ["Student", "entreprise", "admin"];

module.exports = db;