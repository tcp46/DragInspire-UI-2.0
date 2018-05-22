// routes are for declaring your routes that point to your controllers

const AuthenticationController = require('./controllers/AuthenticationController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationController.register)
}
