const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

mongoose.connect('mongodb://localhost:27017/ec_auth_microservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Use user routes
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});