// All controllers are used for declaring your endpoints
const {Project} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const projects = await Project.findAll({
        limit: 10
      })
      res.send(projects)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch your projects.'
      })
    }
  },
  async post (req, res) {
    try {
      const project = await Project.create(req.body)
      res.send(project)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the project.'
      })
    }
  }
}
