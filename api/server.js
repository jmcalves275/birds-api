const config = require('./configurations/config');
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


const usersRouter = require('./services/users/routes')(app);

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : config.DATABASE.HOST,
    user : config.DATABASE.USER,
    password : config.DATABASE.PASSWORD,
    database : config.DATABASE.DB
  }
});

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format



// launch our backend into a port
app.listen(config.APP.PORT, () => console.log(`LISTENING ON PORT ${config.APP.PORT}`));