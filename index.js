require('dotenv/config')
const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const app = express()

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'img-src': ["'self'", 'flagcdn.com', 'upload.wikimedia.org'],
      'require-trusted-types-for': ['script'],
    },
  })
)

app.use((req, res, next) => {
  res.setHeader('Permissions-Policy', 'geolocation=(), interest-cohort=()')
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000;includeSubDomains'
  )
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('Referrer-Policy', 'strict-origin')
  next()
})

app.use(compression())
app.use(express.json())
app.use(express.static('build'))

app.use(middleware.requestLogger)

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

app.get('/api/weather/lat/:lat/lng/:lng/unit/:unit', async (req, res) => {
  const lat = req.params.lat
  const lng = req.params.lng
  const unit = req.params.unit
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=${unit}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed', err)
  }
})

app.get('/api/time/lat/:lat/lng/:lng', async (req, res) => {
  const lat = req.params.lat
  const lng = req.params.lng
  try {
    const response = await axios.get(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.REACT_APP_TIMEZONE}&format=json&by=position&lat=${lat}&lng=${lng}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed', err)
  }
})

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

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

// front end: https://github.com/I-keep-trying/countries3.1
