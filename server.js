require('dotenv').config();
require('./config/database')
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
// const port = 3000;

// IMPORT ROUTES
const userController = require('./controllers/userController')
const sessionController = require('./controllers/sessions')
const itemRoutes = require('./routes/items')
// const itemsList = require('./models/itemsList')


// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

// Routes
app.use('/users', userController)
app.use('/sessions', sessionController)
app.use('/', itemRoutes)


app.get('/', (req, res)=>{
    res.redirect('/BRiiZE')
})


app.listen(process.env.PORT, ()=>{
    console.log(`Robin, your port is at `)
})