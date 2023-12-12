const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  res.render('index.njk', { title: 'Hello from template' })
})

router.get('/about', function (req, res) {
  res.render('about.njk', { title: 'About Page' })
})

module.exports = router