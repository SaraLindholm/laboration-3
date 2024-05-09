import cors from 'cors'
import dotenv from 'dotenv'
import { Client } from 'pg'
import express from 'express'

dotenv.config()

// const client = new Client({
//     database: process.env.PGDATABASE,
//     host: process.env.PGHOST,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT,
//     user: process.env.PGUSER
//   })

const client = new Client ({
  connectionString: process.env.PGURI
})

  client.connect()

// const dotenv = require('dotenv'),
//   { Client } = require('pg')







const app = express ()

app.use(cors())

app.get('/', async (_request, response) => {
  // Property 'queryy' does not exist on type 'Client'. Did you mean 'query'?
  const { rows } = await client.query('SELECT * FROM cities WHERE name = $1', [
    'Stockholm'
  ])

  response.send(rows)
})

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})




// const { rows } = await client.query('SELECT * FROM cities')

// const { rows } = await client.query(
//   'SELECT * FROM cities WHERE name = $1',
//   ['Stockholm']
// )
