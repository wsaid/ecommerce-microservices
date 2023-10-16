const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ec_auth_microservice', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});