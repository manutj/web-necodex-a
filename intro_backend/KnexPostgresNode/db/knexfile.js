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
    connection: {
      database: process.env.DB_URL,
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
