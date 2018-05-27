const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      firstName: Joi.string().optional(),
      lastName: Joi.string().optional(),
      gradYear: Joi.string().optional(),
      college: Joi.string().optional(),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$') // everthing passed in must fulfill these parameters
      )
    }
    const {error, value} = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'firstName':
          res.status(400).send({
            error: 'The first name provided failed to match the rules (only lower case/uppercase/numeritcs and between 8 and 32 character in length)'
          })
          break
        case 'lastName':
          res.status(400).send({
            error: 'The last name provided failed to match the rules (only lower case/uppercase/numeritcs and between 8 and 32 character in length)'
          })
          break
        case 'gradYear':
          res.status(400).send({
            error: 'Oops, your graduation year was entered incorrectly.'
          })
        case 'college':
          res.status(400).send({
            error: 'Oops, your college year was entered incorrectly.'
          })
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
