const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRoute)
app.use(taskRoute)



// Run it
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})