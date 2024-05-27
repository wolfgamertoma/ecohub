const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// List all volunteer opportunities
router.get('/', (req, res) => {
  const volunteers = Volunteer.getAll();
  res.render('index', { body: `<h2>Anunțuri de Voluntariat</h2><ul>${volunteers.map(v => `<li><h3>${v.title}</h3><p>${v.description}</p><p>${v.location} - ${v.date}</p></li>`).join('')}</ul>` });
});

// Render form to create new volunteer opportunity
router.get('/new', (req, res) => {
  res.render('index', { body: `<h2>Publică un Anunț de Voluntariat</h2><form action="/volunteers" method="post"><input type="text" name="title" placeholder="Titlu Anunț" required><textarea name="description" placeholder="Descriere" required></textarea><input type="text" name="location" placeholder="Locație" required><input type="date" name="date" required><input type="submit" value="Publică"></form>` });
});

// Handle new volunteer opportunity submission
router.post('/', (req, res) => {
  const { title, description, location, date } = req.body;
  Volunteer.save({ title, description, location, date });
  res.redirect('/volunteers');
});

module.exports = router;
