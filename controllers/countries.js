const countriesRouter = require('express').Router()

countriesRouter.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all')

    res.json(response.data)
  } catch (err) {
    console.log('axios request failed api/countries', err)
    res.status(err.response.status).send(err.response.statusText)
  }
})
