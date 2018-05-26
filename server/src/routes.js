// routes are for declaring your routes that point to your controllers
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const ProjectsController = require('./controllers/ProjectsController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register) // express middlewear

  app.post('/login',
    AuthenticationController.login)

  app.get('/projects',
    ProjectsController.index)

  app.post('/projects',
    ProjectsController.post)

  app.get('/projects/:projectId',
    ProjectsController.show)

  app.put('/projects/:projectId',
    ProjectsController.put)
}
