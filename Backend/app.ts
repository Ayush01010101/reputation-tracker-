import express, { Application, json } from 'express';
import { router as BrandRouter } from './src/Routes/Brand.router';
import { urlencoded } from 'express';
import { configDotenv } from 'dotenv';
configDotenv()
const app: Application = express();

const options = {
  "origin": "https://mayamorph.netlify.app",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(urlencoded({
  limit: "16kb",
  extended: true

}))
app.use(json({ limit: '16kb' }))
app.use(express.json())
app.use(express.static("Public"))
// app.use("/api/v1/users/", UserRouter)

app.use("/api/v1/brand/", BrandRouter)
export default app
