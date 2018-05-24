module.exports = {
  port: process.env.PORT || 8081,
  db: {
    databse: process.env.DB_NAME || 'newdraginspire', // draginspire is the name of the database
    user: process.env.DB_USER || 'newdraginspire',
    password: process.env.DB_PASS || 'newdraginspire',
    options: {
      operatorsAliases: false,
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './newdraginspire.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret' // determining whether a JWT token is valid or not
  }
}
