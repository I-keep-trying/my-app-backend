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
const fs = require('fs')
const moment = require('moment')

const date = new Date()
const today = moment(date).format('YYYY-MM-DD')

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
//app.use(middleware.requestLogger)

app.use(express.static('build'))

// --------------- Countries from 3rd party api -------------------
app.get('/api/countries', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')

    res.json(response.data)
  } catch (err) {
    console.log('axios request failed api/countries', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})

app.get('/api/countries/name/:name', async (req, res) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${req.params.name}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed api/countries/name', err)
    res.status(err.response.status).send(err.response.statusText)
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
    console.log('axios request failed api/weather', err)
    res.status(err.response.status).send(err.response.statusText)
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
    console.log('axios request failed api/time', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})

// ---------------------- News ----------------------------

app.get('/api/countries/news/:name', async (req, res) => {
  const selectedCountry = req.params.name
  try {
    // const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)
    //    console.log('response.data', response.data)
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${selectedCountry}&from=${today}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed api/countries/news', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})

// --------------------- Maps --------------------------------
//// --------------------- Maps.bbox --------------------------------

app.get('/api/countries/map/:name', async (req, res) => {
  const selectedCountry = req.params.name
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${selectedCountry}&polygon_geojson=1&format=json`
    )
    const resData = response.data[0].boundingbox
    const arrResData = [
      Number(resData[0]),
      Number(resData[1]),
      Number(resData[2]),
      Number(resData[3]),
    ]
    res.json(arrResData)
  } catch (err) {
    console.log('axios request failed api/countries/map', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})

//// --------------------- Maps.features --------------------------------

app.get('/api/countries/features/lat/:lat/lon/:lon', async (req, res) => {
  const location = req.params
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v2/places?categories=accommodation.hotel&filter=circle:${location.lon},${location.lat},5000&limit=20&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed api/countries/features', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})

//// --------------------- Maps.features.details --------------------------------

app.get('/api/countries/feature/:id', async (req, res) => {
  console.log('feature req', req.params.id)
  const id = req.params.id
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v2/place-details?id=${id}&apiKey=${process.env.REACT_APP_GEOAPIFY_KEY}`
    )
    res.json(response.data)
  } catch (err) {
    console.log('axios request failed api/countries/feature', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})

// ------------------ global functions -----------------------

const unknownEndpoint = (request, response) => {
  console.log('Unknown endpoint error', request.params)
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
