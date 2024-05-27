const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// List all projects
router.get('/', (req, res) => {
  const projects = Project.getAll();
  res.render('index', { body: `<h2>Proiecte</h2><ul>${projects.map(p => `<li><h3>${p.title}</h3><p>${p.description}</p><p>${p.location} - ${p.date}</p></li>`).join('')}</ul>` });
});

// Render form to create new project
router.get('/new', (req, res) => {
  res.render('index', { body: `<h2>Publică un Proiect</h2><form action="/projects" method="post"><input type="text" name="title" placeholder="Titlu Proiect" required><textarea name="description" placeholder="Descriere" required></textarea><input type="text" name="location" placeholder="Locație" required><input type="date" name="date" required><input type="submit" value="Publică"></form>` });
});

// Handle new project submission
router.post('/', (req, res) => {
  const { title, description, location, date } = req.body;
  Project.save({ title, description, location, date });
  res.redirect('/projects');
});

module.exports = router;
