const Item = require('../models/Item')
const itemList = require('../models/itemsList')

// NEW
// items/new
const newForm = (req, res)=>{
    try{
        res.render('new.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// CREATE / POST
// POST to myCart
const addToCart = async (req, res) => {
    try{
        const item = req.body.item;
        req.session.cart.push(item)
    }catch(err){
        console.log(err)
    }
}

// HOME
const home = async(req,res) =>{
    try{
        res.render('home.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

const cart = async(req, res) =>{
    try{
        res.render('myCart.ejs', {cart, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX PAGE
const meleePage = async(req,res)=>{
    try{
        const cart = req.session.cart || [];
        res.render('categories/melee.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// RIFLE INDEX PAGE
const riflePage = async(req,res) => {
    try{
        const summerSpring = itemList.summerSpring;
        res.render('categories/rifle.ejs', {summerSpring, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// PISTOL INDEX PAGE
const pistol = async(req,res)=>{
    try{
        const fallWinter = itemList.fallWinter;
        res.render('categories/pistol.ejs', {fallWinter, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// MACHINE GUN INDEX PAGE
const machineGun = async(req,res)=>{
    try{
        const menCologne = itemList.menCologne;
        res.render('categories/machineGun.ejs', {menCologne: menCologne, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}



// SHOW
const show = async (req, res) =>{
    try{
        const index = req.params.id
        const item = await Item.findById(index)
        console.log(item)
        res.render('show.ejs',
        {
            item,
            itemID: id,
            tabTile: item.name,
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}



// DELETE

// EDIT - "/id/edit"

// PUT - "items/:id"

module.exports = {
    home,
    new: newForm,
    cart,
    riflePage,
    pistol,
    machineGun,
    show,
    addToCart,
}