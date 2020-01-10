const express = require('express')
const path = require('path')
const app = express()

// Config for Heroku Buildpack
const port = process.env.PORT || 1337

app.use(express.static(path.join(__dirname, '../build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Express server listening on localhost:${port}`)
})
