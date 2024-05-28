const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// List all projects
router.get('/', (req, res) => {
  const projects = Project.getAll();
  console.log("Projects:", projects);
  res.render('projects', { projects });
});

// Render form to create new project
router.get('/new', (req, res) => {
  res.render('new_project');
});

// Handle new project submission
router.post('/', (req, res) => {
  const { title, description, location, date } = req.body;
  Project.save({ title, description, location, date });
  console.log("Submitted new project:", { title, description, location, date });
  res.redirect('/projects');
});

// Handle reset projects
router.post('/reset', (req, res) => {
  Project.reset();
  res.redirect('/projects');
});

module.exports = router;


