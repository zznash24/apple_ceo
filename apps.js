const express = require('express');
const app = express();
const db = require('./db');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
});

app.get('/ceos', (req, res) => {
  res.render('ceo-list', { ceo_list: db })
})

app.get('/ceos/:slug', (req, res) => {

  let foundCeo = db.find((ceo) => ceo.slug == req.params.slug)

  res.render('ceo-details', { displayCeo: foundCeo })
})

app.listen(3000, () => {
  console.log('server started at port 3000')
})