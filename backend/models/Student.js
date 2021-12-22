const mongoose = require("mongoose");

const Student = mongoose.model(
  "Student",
  new mongoose.Schema({
    fullname:String,
    email: String,
    civilite:String,
    statut : {
      type: String, 
      default: 'Desactiver' ,
      },
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
    
  }),

  
);

module.exports =Student;
