const Project = require('../models/project.model');

getProject = async (req, res) => {
  try {
    // const projects = await Project.find();
    res.status(200).json("hellow world");
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
}

getProjectById = async (req, res) => {
  try {
    console.log(req.params.projectId)
    const projects = await Project.findById(req.params.projectId);
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({
      message: err
    })
  }
}

newProject = async (req, res, next) => {
  const newProject = new Project(req.body);
  try {
    const saveProject = await newProject.save();
    console.log(saveProject);
    res.status(201).json(saveProject);
  } catch (err) {
    next(err);
  }
}

//{error: {message, code, }}
// {data: {}, status: ,meta: {page:,pageSize:,pageCount:,total: ,}}


module.exports = {
  newProject,
  getProject,
  getProjectById
}
