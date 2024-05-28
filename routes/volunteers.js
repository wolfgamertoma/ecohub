const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// List all volunteer opportunities
router.get('/', (req, res) => {
  const volunteers = Volunteer.getAll();
  res.render('volunteers', { volunteers });
});

// Render form to create new volunteer opportunity
router.get('/new', (req, res) => {
  res.render('new_volunteer');
});

// Handle new volunteer opportunity submission
router.post('/', (req, res) => {
  const { title, description, location, date } = req.body;
  Volunteer.save({ title, description, location, date });
  res.redirect('/volunteers');
});

// Handle reset volunteers
router.post('/reset', (req, res) => {
  Volunteer.reset();
  res.redirect('/volunteers');
});

module.exports = router;




