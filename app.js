const express = require('express');
const path=require('path');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');

const app = express();

require('dotenv').config();


const hostname = 'localhost';
app.engine('ejs',ejsMate);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Serve static files
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async(req, res) => {
    res.render('home',{currentPage: 'none' });
});

app.get('/aboutus', async(req, res) => {
  res.render('aboutus',{currentPage: 'aboutus' });
});

app.get('/products', async(req, res) => {
  res.render('product',{ currentPage: 'product' });
});

app.get('/teams', async(req, res) => {
    res.render('teams',{ currentPage: 'team' });
});

app.get('/contact', async(req, res) => {
    const key=process.env.FORM_TO_MAIL;
    res.render('contacts',{ key,currentPage: 'contactus' });
});

app.listen(4001, () => {
    console.log(`CONNECTED TO DB AND SERVER START ON ${4000}`);
});