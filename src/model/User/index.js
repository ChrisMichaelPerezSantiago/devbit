const User = require('./User');
const {registerValidation , loginValidation} = require('./schema');

module.exports ={
  User,
  registerValidation,
  loginValidation
}