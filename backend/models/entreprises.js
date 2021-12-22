const mongoose = require("mongoose");

const Entreprises = mongoose.model(
  "Entreprises",
  new mongoose.Schema({
    fullname:String,
    email: String,
    nomEntreprise:String,
    siteweb:String,
    tel:String,
    Adresse:String,
    lienFacebook:String,
    lientwitter:String,
    LinkedIn:String,
    identifiant:{
     type:String ,
     unique: true
    },

    secteurActivite:String,
    password: String,
    //logo:File,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
    
  }),

  
);

module.exports = {Entreprises};
