const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRoutes = require('./routes/index');
const projectRoutes = require('./routes/projects');
const volunteerRoutes = require('./routes/volunteers');

app.use('/', indexRoutes);
app.use('/projects', projectRoutes);
app.use('/volunteers', volunteerRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
