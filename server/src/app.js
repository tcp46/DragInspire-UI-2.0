const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync() // {force: true} plug this in, save, quit server, restart server, remove, save, and run postman
  .then(() => {
    app.listen(config.port)
    console.log('Server started on port')
  })
