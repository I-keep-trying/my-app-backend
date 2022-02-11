require('dotenv/config')
const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
//const Note = require('./models/note')
//const countries = require('./all-countries')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.static('build'))

const countriesUri = process.env.MONGODB_URI_COUNTRIES

// --------------- Countries from 3rd party api -------------------
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed', err)
  }
})

app.get('/api/countries/name/:name', async (req, res) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${req.params.name}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed', err)
  }
})

// --------------- Countries from mongodb atlas--------------------
/* mongoose.connect(process.env.MONGODB_URI_COUNTRIES)
const countrySchema = new mongoose.Schema({ name: String })
const Country = mongoose.model('Country', countrySchema)

// get all countries
app.get('/api/countries', (request, response) => {
  Country.find({}).then((country) => {
    response.json(country)
  })
})

// get one country by name(?)
app.get('/api/countries/:name', (request, response, next) => {
  console.log('request.params.name', request.params.name)
  Country.find({ name: request.params.name })
    .then((country) => {
      if (country) {
        response.json(country)
      } else {
        console.log('404 error:', error)
        response.status(404).send({ error: 'record not found' }).end()
      }
    })
    .catch((error) => next(error))
}) */
/* 
// ------------------- Countries from local json file ------------------
app.get('/api/countries', (request, response) => {
  response.json(countries)
})

// one country from local file 
app.get('/api/countries/:name', (request, response) => {
  response.json(
    countries.filter((country) => country.name === request.params.name)
  )
})
 */

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})
/* 
app.get('/api/notes', (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response, next) => {
  Note.findById(request.params.id)
    .then((note) => {
      if (note) {
        response.json(note)
      } else {
        console.log('404 error:', error)
        response.status(404).send({ error: 'record not found' }).end()
      }
    })
    .catch((error) => next(error))
})

app.post('/api/notes', (request, response) => {
  const body = request.body

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note.save().then((savedNote) => {
    response.json(savedNote)
  })
})
 */
const unknownEndpoint = (request, response) => {
  console.log('Unknown endpoint error')
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error('Generic error: ', error.message)

  if (error.name === 'CastError') {
    console.log('Cast error: ', error.message)
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

/* app.get('/api/countries', (request, response) => {
  response.json(countries)
}) */

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
