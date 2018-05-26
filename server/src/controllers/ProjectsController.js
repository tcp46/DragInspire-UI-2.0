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
  async show (req,res) {
    try {
      const project = await Project.findById(req.params.projectId)
      res.send(project)
    } catch (err) {
      res.status(500).send({
        error: 'Could not find the project you were looking for.'
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
  },
  async put (req, res) {
    try {
      await Project.update(req.body, {
        where: {
          id: req.params.projectId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the project'
      })
    }
  }
}
