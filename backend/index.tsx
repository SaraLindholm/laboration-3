import cors from 'cors'
import express from 'express'
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const bodyParser = require('body-parser');
const dotenv = require('dotenv'),
  { Client } = require('pg')


//läser in data drån min .env-fil
dotenv.config()

//skapar klient och anslutning till postgres via .env
const client = new Client ({
  connectionString: process.env.PGURI
})
  //..ansluter
  client.connect()

const app = express ()
const port = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.json());


  //GET-anrop för att hämta alla rader från tabellen clothes till Rot
app.get('/', async (_request, response) => {
  console.log('GET-ANROP');
  const { rows } = await client.query('SELECT * FROM clothes ORDER BY RANDOM()')
//    WHERE name = $1 OR name = $2', ['Snygg bikini', 'Sport-bh'])

//skickar de aktuella (dvs alla) raderna som svar
  response.status(200).send(rows);
})

//POST-Anrop för att lägga till kläder i tabellen Clothes
app.post('/upload', upload.single('image_url'), async (request, response) => {
  console.log(request.file, request.body)

  const { name, description, brand, size, color, condition_comment, category_id, image_url } = request.body;

  try {
    const query = `
      INSERT INTO clothes (name, description, brand, size, color, condition_comment, category_id, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
       const { rows } = await client.query(query, [name, description, brand, size, color, condition_comment, category_id, image_url]);

      console.log('Lägger till plagg i databasen');
      response.status(201).json(rows)
  } catch (error){

    console.error('Error POST', error);
    response.status(500).json()
  }

})

// app.post("/upload", upload.single('image_url'), async (request, response) =>{
//   console.log(request.file, request.body)
//   response.send('Plagget är uppladdat')

// })


app.listen(port, () => {
  console.log('Kontaktar servern på tjusiga http://localhost:3000')
})
