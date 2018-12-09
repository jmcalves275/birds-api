const controllers = require('./controllers');
const validators = require('./validators');

function register(app) {
  
  app.get('/user', controllers.getUser);
  
  app.post('/user', validators.newUser, controllers.newUser);
  
}
module.exports = register;
