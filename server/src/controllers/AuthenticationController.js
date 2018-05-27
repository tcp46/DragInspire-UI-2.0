// All controllers are used for declaring your endpoints
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

// sends back a jwt token to the server when a user signs in
function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      // email already exists
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }

      console.log('user', user.toJSON())

      const isPasswordValid = await user.comparePassword(password) // calls the function in the User.js file called User.prototype.comparePassword

      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect.'
        })
      }
      // comeback to this -- postman does not display a token following the user (tutorial #3 minute 35)
      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured while trying to login.'
      })
    }
  },
  async show (req,res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.params.userEmail
        }
      })
      res.send(user)
    } catch (err) {
      res.status(500).send({
        error: 'Could not find the profile you were looking for.'
      })
    }
  }
}
