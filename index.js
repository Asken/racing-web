const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// Routers
const settings = require('./routes/settings')

const data = require('./data')

const Configuration = require('./models/configuration')
const c = new Configuration()

app.use(cors())
//app.use('/admin', express.static(path.join(__dirname, 'racing', 'build', 'production', 'racing')))
app.use('/admin', express.static(path.join(__dirname, 'admin', 'dev')))
app.use('/admin-test', express.static(path.join(__dirname, 'admin', 'ace-v3.1.1')))
app.use(express.static('public'))
app.use('/settings', settings)

app.get('/servers', async (req, res) => {
  await data.servers()
  res.send({
      success: true
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
