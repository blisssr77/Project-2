const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/User')

router.get('/login', (req,res) =>{
   
    res.render('sessions/login.ejs', {
        currentUser: req.session.currentUser
    })
})

// POST - logging in the user
router.post('/', async (req, res)=>{
    try{
        const foundUser = await User.findOne({username: req.body.username})
        if(!foundUser){
            // unseccessful login(username not exist)
            res.send('<a href="/">Sorry, no user found!</a>')
        } else if(bcrypt.compareSync(req.body.password, foundUser.password)){
            // successful login
            req.session.currentUser = foundUser
            res.redirect('/')
        } else {
            // when user put incorrect information(id/pw)
            res.send('<a href="/">Username or Password is incrrect</a>')
        }
    }catch(err){
        console.log(err)
        res.send('The database had a problem')
    }
})

// Destory the session on logout
router.delete('/', (req,res)=>{
    req.session.destroy(() => {res.redirect('/')})
})

module.exports = router