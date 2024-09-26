const express = require('express');
const path=require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();


const hostname = 'localhost';
const port = 3000;
app.engine('ejs',ejsMate);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', async(req, res) => {
    res.render('home');
  });

app.get('/aboutus', async(req, res) => {
  res.render('aboutus');
});

app.get('/teams', async(req, res) => {
    res.render('teams');
  });

app.get('/contact', async(req, res) => {
    res.render('contact');
});

app.listen(4000, () => {
    console.log(`CONNECTED TO DB AND SERVER START ON ${4000}`);
});