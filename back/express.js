import 'dotenv/config'
import express from "express"
import fetch from "node-fetch"
import dotenv from 'dotenv'
dotenv.config({path: '.env'})
const app = express()
const port = 4001
const API_KEY = process.env.API_KEY
const API_SECRET = process.env.API_SECRET

app.get('/', (req, res) => {
  console.log(req.query.token);
  const headers = {
    "Content-Type":"application/x-www-form-urlencoded"
  }
  
  fetch(`https://api.betaseries.com/oauth/access_token?client_id=${API_KEY}&client_secret=${API_SECRET}&redirect_uri=http://localhost:4001&code=${req.query.code}`, {method: 'POST'})
  .then((res) => {
    return res.json()
  })
  .then(token => {
    res.redirect(`http://localhost:8080/home/${token.access_token}`);
  })
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})