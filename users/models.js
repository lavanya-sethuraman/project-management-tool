const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String, 
    default: ""
  },
  projectManagerData:{
  projects:[{
      projectName: {
        type: String,
        default: ""
      },
      clientName: {
        type: String,
        default: ""
      },
      description: {
        type: String,
        default: ""
      },
      technology: {
        type: String,
        default: ""
      },
      duration: {
        type: Number,
        default: ""
      },
      hours:{
        type: Number,
        default: ""
      },
      totalHours:{
        type: Number,
        default: ""
      },
      startDate:{
        type: String,
        default: ""
      },
      endDate:{
        type: String,
        default: ""
      },
      cost:{
        type: String,
        default: ""
      },
      tasks: [{}],
      document: {
        type: String,
        default: ""
      }
  }]
}
});

UserSchema.methods.apiRepr = function() {
  return {
    userName: this.userName || '',
    fullName: this.fullName || ''
  };
}
UserSchema.methods.validatePassword = function(password) {
  return bcrypt.compare(password, this.password);
}
UserSchema.statics.hashPassword = function(password) {
  return bcrypt.hash(password, 10);
}


const User = mongoose.model('User', UserSchema);

module.exports = {User};
