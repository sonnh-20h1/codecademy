const express = require('express');
const router = express.Router();
const ProjectController = require('../controllers/project.controller');

router.get('/projects',ProjectController.getProject);
router.get('/projects/:projectId/',ProjectController.getProjectById)

router.post('/projects',ProjectController.newProject);

//user:username,mail,hash
router.put('/projects/:projectId',ProjectController.newProject); //find and replace -> find and modify
router.patch('/projects/:projectId',ProjectController.newProject); //find and modify -> x

router.delete('/id/:projectId',ProjectController.getProjectById)

module.exports = router; 