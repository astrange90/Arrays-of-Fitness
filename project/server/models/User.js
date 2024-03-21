const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

// Define the schema for a user
const UserBuild = new Schema({
    username: {
       type: String,
       required: true,
       unique: true,
    },
    email: {
       type: String,
       required: true,
       unique: true,
       match: [/.+@.+\..+/, 'Please enter a valid email.'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
      },
    age: {
       type: Number,
       required: true
    },
    height: {
       type: Number,
       required: true
    },
    weight: {
       type: Number,
       required: true
    },
});

// hash user password
UserBuild.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  UserBuild.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// Create a model based on the schema
const User = model('User', UserBuild);

module.exports = User;
