const mongoose = require('mongoose');

const { Schema } = mongoose;

const mentor = new Schema({
  id: String,
  username: String,
  name: String,
  webinars: Array, // Type will be changed to `WebinarTypes`
  verified: String,
  password: String,
  bio: String,
  location: String,
  links: Array, // Type will be changed to `{}_public profile links_`
  email: String,
  followers: Object, // Type will be changed to `menteeTypeID`
  expertise: Object,
});

module.exports = mongoose.model('Mentor', mentor);
