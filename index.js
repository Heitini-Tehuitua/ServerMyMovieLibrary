
const express = require('express')
const app = express()
const port = 3001
const dbRouter = require('./dbRoutes')


app.use("/api", dbRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

