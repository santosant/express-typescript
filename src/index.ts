import express, { Application } from "express"

const PORT = process.env.PORT || 3333

const app: Application = express();

app.get("/ping", async (req, res) => {
  res.send({
    message: "pong"
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})