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
    connection: 'postgres://vpxsltcyvznnrj:0d37acc30a8d8f428be2957d3dfbfef17bf21f504d24961438837398a5242ec3@ec2-54-243-193-227.compute-1.amazonaws.com:5432/dhub0d1lkerr6',
  }

}
