import express, { Response } from 'express'
import app from './app'







app.get('/', async (_, res: Response) => {
  res.json({
    status: 200,

    message: 'backend health is good',
    data: {}
  })
})


app.listen(4000, () => {
  console.log('I am listening on' + 4000)
})

