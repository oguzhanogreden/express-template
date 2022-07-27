import express, { Request, Response } from "express"
import { dataSource } from "./db"

// Data source
dataSource.initialize()
  .then(() => console.log("init!"))
  .catch(err => console.error(err))
// create and setup express app
const app = express()
app.use(express.json())

// register routes

app.get("/", function (req: Request, res: Response) {
  res.json({
    "Hello": "world."
  });
})

app.listen(3000)