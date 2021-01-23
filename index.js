const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const data = require('./data')

app.use(cors())
app.use(express.static(path.join(__dirname, 'racing', 'build', 'production', 'racing')))

app.get('/servers', async (req, res) => {
  await data.servers()
  res.send({
      success: true
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
