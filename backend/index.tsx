import cors from 'cors'
import express from 'express'
// import dotenv from 'dotenv'
// import { Client } from 'pg'

const dotenv = require('dotenv'),
  { Client } = require('pg')

dotenv.config()

const client = new Client ({
  connectionString: process.env.PGURI
})

  client.connect()

const app = express ()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM clothes')
//    WHERE name = $1 OR name = $2', [
//     'Snygg bikini', 'Sport-bh'
//   ]
// )

  response.send(rows)
})

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop på http://localhost:3000')
})
