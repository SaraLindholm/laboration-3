import cors from 'cors'
import express from 'express'
import path from 'path'
import multer from 'multer'
__dirname = path.dirname(__filename);

// const upload = multer({ dest: 'uploads/' })

const upload = multer({ dest: path.join(__dirname, "uploads") });

// const { body, validationResult } = require('express-validator')
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
app.use(cors());
app.use(express.urlencoded({ extended: false }))
// app.use('/uploads', express.static(path.join(path.resolve(), 'uploads')))
app.use("/uploads", express.static(path.join(__dirname, "uploads"))
);
const port = process.env.PORT || 3000


app.use(bodyParser.json())

// app.use(express.json());


  //GET-anrop för att hämta alla rader från tabellen clothes till Rot
app.get('/', async (_request, response) => {
  console.log('GET-ANROP');
  const { rows } = await client.query('SELECT * FROM clothes ORDER BY RANDOM()')


//skickar de aktuella (dvs alla) raderna som svar
  response.status(200).send(rows);
})

//POST-Anrop för att lägga till kläder i tabellen Clothes
app.post('/upload', upload.single('image_url'), async (request, response) => {
  console.log('File:', request.file)
  console.log('Body:', request.body)

  const { name, description, brand, size, color, condition_comment, category_id } = request.body;

  try {
    const query = `
      INSERT INTO clothes (name, description, brand, size, color, condition_comment, category_id, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
      //  const { rows } = await client.query(query, [name, description, brand, size, color, condition_comment, category_id, request.file !== undefined ?request.file.filename: '']);
      const values = [
        name,
        description,
        brand,
        size,
        color,
        condition_comment,
        category_id,
        request.file !== undefined ? request.file.filename : ''
      ];

      const { rows } = await client.query(query, values);


      console.log('Lägger till plagg i databasen');
      response.status(201).json(rows)
  } catch (error){

    console.error('Error POST', error);
    response.status(500).json()
  }

})

//POST för att kontrollera om användaren är registrerad
// const { query: pgquery } = require('pg');
app.post('/verify', async (request, response) => {
  console.log (request.body)

  const { surname, lastname, email, password } = request.body
   try {
    const member = await client.query('SELECT * FROM users WHERE surname ILIKE $1 AND lastname ILIKE $2 AND email = $3 AND password = $4', [surname, lastname, email, password]);

    if (member.rows.length > 0) {
      response.json({success: true})
      console.log('Användaren finns!')
    } else {
      response.json({success: false})
      console.log('Användaren finns inte, alternativt är inloggningsuppgifterna felaktiga')
    }
   } catch (error) {
    console.error('Ett fel har uppstått:', error)
    response.status(500).json({success: false, error: 'Serverfel'})
   }
})



//POST-Anrop för att lägga till medlemmar
app.post('/membership',
//  [
//   body('name').notEmpty().withMessage('Namn är obligatoriskt'),
//   body('email').isEmail().withMessage('Fyll i aktuell email'),
//   body('password').isLength({min:6}).withMessenge('Lösenord måste bestå av minst 6 tecken')
// ],
async (request, response) => {
  console.log(request.body)

  // const errors = validationResult(request)
  //   if(!errors.isEmpty()) {
  //     return response.status(400).json({errors: errors.array()})
  //   }

const { surname, lastname, email, password } = request.body;
  if (!surname || !lastname || !email || !password) {
    return response.status(400).json({ error: 'Alla fält ska fyllas i' });
  }

  try {
    const query = `
      INSERT INTO users(surname, lastname, email, password) VALUES ($1, $2, $3, $4)`;
       const { rows } = await client.query(query, [surname, lastname, email, password]);

      console.log('Lägger till användare i databasen');
      response.status(201).json(rows)
  } catch (error){

    console.error('Error POST', error);
    response.status(500).json()
  }

})




app.listen(port, () => {
  console.log('Kontaktar servern på tjusiga http://localhost:3000')
})
