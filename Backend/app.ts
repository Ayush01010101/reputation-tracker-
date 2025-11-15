import express, { Application, json } from 'express';
import cors from 'cors'
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
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,


}))
app.use(urlencoded({
  limit: "16kb",
  extended: true

}))
app.use(json({ limit: '16kb' }))
app.use(express.json())
app.use(express.static("Public"))
// app.use("/api/v1/users/", UserRouter)

app.use("/api/v1/brand", BrandRouter)
export default app
