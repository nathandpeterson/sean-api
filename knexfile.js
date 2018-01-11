// Update with your config settings.
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/sean_dev',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  production: {
    client: 'pg',
    connection: '',
  }

}