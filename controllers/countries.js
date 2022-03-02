const countriesRouter = require('express').Router()

countriesRouter.get('/', async (req, res) => {
  res.json(res.data)
})
