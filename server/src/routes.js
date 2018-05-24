// routes are for declaring your routes that point to your controllers
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ProjectsContoller = require('./controllers/ProjectsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register) // express middlewear

  app.post('/login',
    AuthenticationController.login)

  app.get('/projects',
    ProjectsContoller.index)

  app.post('/projects',
    ProjectsContoller.post)
}
