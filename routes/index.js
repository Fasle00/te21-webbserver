const express = require("express")
const router = express.Router()

router.get("/", function (req, res) {
  res.render('index.njk', { title: 'Hello from template', text: 'text' })
})

module.exports = router