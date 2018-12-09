const data = ('./data.json')
const { check, validationResult } = require('express-validator/check');

const users = []

function getUser(req, res) {

  res.status(200);
  res.send(users);
}

function newUser(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  
  let user = req.body  
  users.push(user)
  res.status(200);
  res.send();
}

module.exports = {
  getUser,
  newUser,
};
