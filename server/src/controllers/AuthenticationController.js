// All controllers are used for declaring your endpoints
const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      // email already exists
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  }
}
