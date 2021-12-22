const config = require("../config/auth.config");
const db = require("../models");
const Student = require("../models/Student");
const Role = db.role;
const Entreprises=require("../models/entreprises")
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new Student({
    fullname:req.body.fullname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    statut: req.body.statut,
    civilite:req.body.civilite
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "student" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
             res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

exports.signupEntreprise = (req, res) => {
  const entreprise = new Entreprises({
    fullname:req.body.fullname,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    statut: req.body.statut,
    nomEntreprise:req.body.nomEntreprise,
    siteweb:req.body.siteweb,
    tel:req.body.tel,
    Adresse:req.body.Adresse,
    identifiant:req.body.identifiant,
    secteurActivite:req.body. secteurActivite,

  });

  entreprise.save((err, entreprise) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          entreprise.roles = roles.map(role => role._id);
          entreprise.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "Entreprise was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name:"entreprise" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        entreprise.roles = [role._id];
        entreprise.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "Entreprise was registered successfully!" });
        });
      });
    }
  });
};

  exports.signin = (req, res) =>
  Student.findOne({
    email: req.body.email
  })
    .populate("roles", "-__v")
    .exec((err, Student) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

     

      if (!Student) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        Student.password,

      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: Student.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < Student.roles.length; i++) {
        authorities.push("ROLE_" + Student.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: Student._id,
        fullname: Student.fullname,
        email: Student.email,
        roles: authorities,
        accessToken: token
      });
    });

  exports.signinE = (req, res) =>
  Entreprises.findOne({
      email: req.body.email
    })
      .populate("roles", "-__v")
      .exec((err, Entreprises) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
  
       
  
        if (!Entreprises) {
          return res.status(404).send({ message: "User Not found." });
        }
  
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          Entreprises.password,
  
        );
  
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!"
          });
        }
  
        var token = jwt.sign({ id: Entreprises.id }, config.secret, {
          expiresIn: 86400 // 24 hours
        });
  
        var authorities = [];
  
        for (let i = 0; i < Entreprises.roles.length; i++) {
          authorities.push("ROLE_" + Entreprises.roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: Entreprises._id,
          fullname: Entreprises.fullname,
          nomEntreprise:Entreprises.nomEntreprise,
          email: Entreprises.email,
          roles: authorities,
          accessToken: token
        });
      });

  

    