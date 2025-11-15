import express, { Application, json } from 'express';
import { configDotenv } from 'dotenv';
configDotenv()
const app: Application = express();

const options = {
  "origin": "https://mayamorph.netlify.app",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

app.use(json({ limit: '16kb' }))
app.use(express.json())

export default app
