// All controllers are used for declaring your endpoints
const {Profile} = require('../models')

module.exports = {
  async show (req,res) {
    try {
      const profile = await Profile.findById(req.params.projectId)
      res.send(profile)
    } catch (err) {
      res.status(500).send({
        error: 'Could not find the profile you were looking for.'
      })
    }
  },
  async post (req, res) {
    try {
      const profile = await Profile.create(req.body)
      res.send(profile)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the profile.'
      })
    }
  }
}
