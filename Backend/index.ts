import express, { Response } from 'express'
import { db } from './src/Database/db'
import { users } from './src/Database/schema'
import app from './app'

app.get('/', async (_, res: Response) => {


  res.json({
    status: 200,

    message: 'backend health is good',
    data: {}
  })
})

app.post("/users", async (req, res) => {
  const { name, age } = req.body;
  try {
    const newUser = await db.insert(users).values({ name, age, email: "Testemail@gmail.com" }).returning();
    res.json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding user");
  }
});
app.listen(4000, () => {
  console.log('I am listening on' + 4000)
})

