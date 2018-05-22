const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// get, post, put, patch, delete
app.post('/register', (req, res) => {
  res.send({
    message: 'Hello your user was registered!'
  })
})

app.listen(process.env.PORT || 8081)
