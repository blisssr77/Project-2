require('dotenv').config();
require('./config/database')
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const port = 3000;

// IMPORT ROUTES
const userController = require('./controllers/userController')
const sessionController = require('./controllers/session')
const itemRoutes = require('./routes/items')


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
app.use('/session', sessionController)
app.use('/', itemRoutes)


app.get('/', (req, res)=>{
    res.redirect('/greyshoppingmall')
})


app.listen(port, ()=>{
    console.log(`Robin, your port is at ${port}`)
})