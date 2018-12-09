
const config = require('../configurations/config');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : config.DATABASE.HOST,
    user : config.DATABASE.USER,
    password : config.DATABASE.PASSWORD,
    database : config.DATABASE.DB
  }
});

// create table 'users' with a primary key using 'increments()'
knex.schema.createTable('user', (table) => {
  table.uuid('id').primary()
  table.string('username')
  table.integer('password')

}).then(() => console.log("table created"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
      knex.destroy();
  });