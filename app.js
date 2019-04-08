'use strict'
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const rubbishGenerate = require('./rubbish.js')

const Handlebars = require('handlebars')
require('handlebars-helpers')({ handlebars: Handlebars })

const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extends: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { career: 'engineer' })
})

app.post('/', (req, res) => {
  const career = req.body.career
  const rubbish = rubbishGenerate(career)
  res.render('index', { rubbish, career })
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
