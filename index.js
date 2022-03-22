require('dotenv/config')
const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const cors = require('cors')
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')
const app = express()

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      /*    'img-src': [
        "'self'",
        'data:',
        'flagcdn.com',
        'upload.wikimedia.org',
        'openweathermap.org',
        'hereapi.com',
        'js.api.here.com',
      ],
      'connect-src': [
        'sheltered-scrubland-08732.herokuapp.com',
        'https://*.here.com:*',
        'https://*.hereapi.com:*',
        'blob:',
      ],
      'worker-src': ["'self'", 'blob:'], */

      'script-src': [
        "'sha256-z3XhI/8xFoDrGlxvbPxJ1yuAuu4OutSCCbQxwVhexaQ='",
        "'sha256-fcWab9rerwGZI9O/reUjDM9OF42ISG0XwzVbODqwjJw='",
        "'sha256-jgxyqLN0ronufYylGiVVJ0rMXa+9Wf+a4F6alb7drPo='",
        "'sha256-47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='", // <script src="/static/js/runtime-main.11477cd6.js"></script>
        "'sha256-10e801rrdN2Gq8YctvySwnSlugHJX+Xjgx1mhmij72w='",
        "'sha256-e89fobGAetuB/6VgXYgfYEJo7toSqmridYOdrJoE6LU='",
        "'strict-dynamic'",
        'http:',
        'https:',
        "'unsafe-inline'",
      ],
      'object-src': ["'none'"],
      'base-uri': ["'none'"],
      //  'require-trusted-types-for': [`'script'`], // cannot use. 'script' value requires further specifications which are a mystery to solve some other time.
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
  res.setHeader('Cache-Control', 'max-age=31536000')
  next()
})

app.use(compression())
app.use(express.json())
app.use(middleware.requestLogger)

app.use(express.static('build'))

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

// --------------- Country Weather from 3rd party api -------------------

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

// --------------- Country date/time from 3rd party api -------------------

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
