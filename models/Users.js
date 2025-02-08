// Configuracao do schema

const mongoose = require('mongoose')
const ut = require('../utils/Utilities')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    requeride: true,
  },
  email: {
    type: String,
    requeride: true,
  },
  born_date: {
    type: Date,
    requeride: true,
  },
  age: {
    type: Number,
    requeride: true,
  },
  user_password: {
    type: String,
    requeride: true,
  },
},
  {
    timestamps: true,
  }  
);

const User = mongoose.model('User', UserSchema)

module.exports = User
