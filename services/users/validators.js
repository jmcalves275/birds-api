const { check } = require('express-validator/check');

const newUser = [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 5 chars long
  check('password').isLength({ min: 5 })
]

module.exports = {
  newUser
}