const dotenv = require('dotenv')
dotenv.config({path:'../.env'})
module.exports = {


  //Objeto de conexion para knex
  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB,
      user:process.env.DB_USER,
      password:process.env.DB_PWD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'postgresql',
    connection: 'postgres://xwrhkzms:zu5JMMqXec_8fhUu8NgzrjDuk0bTnowX@baasu.db.elephantsql.com/xwrhkzms',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
