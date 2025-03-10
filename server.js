const express = require("express")
const app = express()

const authRoute = require("./routes/auth-route")

app.use("/auth", authRoute)

const port = process.env.PORT || 8000
app.listen(port, ()=> console.log(`Server is running on, ${port}`))