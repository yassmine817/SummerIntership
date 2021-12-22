const config = require("../config/auth.config");
var ObjectId = require('mongoose').Types.ObjectId;
var bcrypt = require("bcryptjs");
const {  Offres } = require("../models/offres.model");

const{Entreprises} =require("../models/entreprises");

exports.addOffre = (req, res) => {
    const offres = new  Offres({
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
        status:req.body.status,
        id_entreprise:Entreprises.ObjectId

    });
    console.log(offres);
    offres.save((err, offres) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        res.send({ message: "offre was registered successfully!" });

    });
}
exports.ListOffresActive = (req, res) => {
    Offres.find({"status" : "Activer"}, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving menus :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.ListOffresDesactive = (req, res) => {
    Offres.find({"status" : "Desactiver"}, (err, docs) => {
        if (!err) { res.send(docs); } else { console.log('Error in Retriving menus :' + JSON.stringify(err, undefined, 2)); }
    });
}

exports.ListOffres = (req, res) => {
    Offres.find((err, docs) => {
        if (!err) { res.send(docs); } else
         { console.log('Error in Retriving menus :' + JSON.stringify(err, undefined, 2)); }
    });
}


exports.ListOffresOne = (req, res) => {
    const id = req.params.id;

    Offres.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Tutorial with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" + id });
        });
};

exports.updateOffre = (req, res) => {

    if (!req.body.title || !req.body.description || !req.body.jobType || !req.body.categories || !req.body.experience || !req.body.deadline || !req.body.skillRequirments || !req.body.address || !req.body.country || !req.body.city || !req.body.email) {
        res.status(400).send({
            message: "required fields cannot be empty",
        });
    }
    Offres.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((Offres) => {
            if (!Offres) {
                return res.status(404).send({
                    message: "No offres found",
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

exports.delete = (req, res) => {
    const id = req.params.id;
    Offres.findByIdAndRemove(req.params.id)
        .then((offres) => {
            if (!Offres) {
                return res.status(404).send({
                    message: "offre not found ",
                });
            }
            res.send({ message: "offre deleted successfully!" });
        })
        .catch((err) => {
            return res.status(500).send({
                message: "Could not delete offre ",
            });
        });
};

