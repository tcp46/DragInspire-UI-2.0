const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$') // everthing passed in must fulfill these parameters
      )
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'The password provided failed to match the rules (only lower case/uppercase/numeritcs and between 8 and 32 character in length)'
          })
          break
        default:
         res.status(400).send({
           error: 'Invalid registration information.'
         })
      }
    } else {
      next()
    }
  }
}
