const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    desc:String
})

const Project = mongoose.model('project',projectSchema);
module.exports = Project;
