
const express = require('express')
const dbRouter = require('./dbRoutes')
const app = express()
const port = 3001


app.use("/api", dbRouter)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})