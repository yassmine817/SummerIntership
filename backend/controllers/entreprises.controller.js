const config = require("../config/auth.config");
var ObjectId = require('mongoose').Types.ObjectId;
var bcrypt = require("bcryptjs");
const {Entreprises} = require("../models/entreprises");


exports.addEntreprise = (req, res) => {
    const entreprises= new Entreprises({
        title: req.body. title,
        description: req.body.description,
        jobType: req.body.jobType,
        categories: req.body.categories,
        experience: req.body. experience,
        deadline: req.body.deadline,
        skillRequirments: req.body.skillRequirments,
        address: req.body.address,
        country: req.body.country,
        city: req.body.city,
        email: req.body.email,
        status:req.body.status
    });
    console.log( entreprises);
    entreprises.save((err,  entreprises) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: "entreprise was registered successfully!" });

    });
}

exports.showdétails = (req, res) => {
    Entreprises.find((err, docs) => {
        if (!err) { res.send(docs); } else
         { console.log('Error in Retriving menus :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.ListprofilOne = (req, res) => {
    const id = req.params.id;

    Entreprises.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving e,treprise with id=" + id });
        });
};


exports.SearchEntName = (req, res) => {
    const name = req.params.name;
    

    Entreprises.find({nomEntreprise: name})
        .then(data => {
            if (!data)
                res.status(404).send({ message:"Not found entreprise with name " + name });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving entreprise with name=" + name});
        });
}    



exports.updateProfil = (req, res) => {

    if (!req.body.fullname || !req.body.email || !req.body.nomEntreprise || !req.body.categories || !req.body.tel || !req.body.identifiant || !req.body.password || !req.body.Adresse || !req.body.lienFacebook || !req.body.siteweb || !req.body.LinkedIn|| !req.body.lientwitter) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Entreprises.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((Entreprises) => {
            if (!Entreprises) {
                return res.status(404).send({
                    message: "No entreprise found",
                });
            }
            res.status(200).send(menu);
            console.log(res);
        })
        .catch((err) => {
            return res.status(404).send({
                message: "error while updating the post",
            });
        });
};