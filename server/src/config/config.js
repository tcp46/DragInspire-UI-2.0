module.exports = {
  port: process.env.PORT || 8081,
  db: {
    databse: process.env.DB_NAME || 'draginspire', // draginspire is the name of the database
    user: process.env.DB_USER || 'draginspire',
    password: process.env.DB_PASS || 'draginspire',
    options: {
      operatorsAliases: false,
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './draginspire.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret' // determining whether a JWT token is valid or not
  }
}
