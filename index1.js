require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
//const notes = require('./notes')
const countries = require('./all-countries')
const cors = require('cors')

const app = express()

const notesUri = process.env.MONGODB_URI_NOTES
const countriesUri = process.env.MONGODB_URI_COUNTRIES

mongoose.connect(process.env.MONGODB_URI_NOTES)
//mongoose.connect(process.env.MONGODB_URI_COUNTRIES)

const noteSchema = new mongoose.Schema({})
//const countrySchema = new mongoose.Schema({})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoose.model('Note', noteSchema)
//const Country = mongoose.model('Country', countrySchema)

 Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
 // mongoose.connection.close()
}) 

/* Country.find({}).then(result => {
  result.forEach(country => {
    console.log(country)
  })
  mongoose.connection.close()
}) */
app.use(express.json())
app.use(express.static('build'))

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

/*
//For getting locally stored notes from './notes.json' 
app.get('/api/notes', (request, response) => {
  response.json(notes)
}) */
app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/countries', (request, response) => {
  response.json(countries)
})

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)