require('dotenv').config()

const PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI_NOTES
const COUNTRIES_URI =
  'https://restcountries.com/v3.1/all'

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
  MONGODB_URI,
  COUNTRIES_URI,
  PORT,
}
