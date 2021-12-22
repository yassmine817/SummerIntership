const mongoose = require('mongoose');

const Offres = mongoose.model('Offres', new mongoose.Schema({
 
    title: { type: String, required: true },
    description: { type: String, required: true },
    jobType: { type: String, required: true },
    categories: { type: String, required: true },
    experience: { type: String, required: true },
    deadline: { type: String, required: true },
    skillRequirments: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true },
    id_entreprise: { type: String, required: true },
}), )


module.exports = { Offres };