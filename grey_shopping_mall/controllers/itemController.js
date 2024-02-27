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
const addToWishList = async (req, res) => {
    try{
        const item = req.body.item;
        res.render('wishList', {item: item})
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

const wishList = async(req, res) =>{
    try{
        res.render('wishList.ejs', {wishList, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}


// SUMMER SPRING INDEX PAGE
const summerSpringPage = async(req,res) => {
    try{
        const summerSpring = itemList.summerSpring;
        res.render('categories/summerSpring.ejs', {summerSpring, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// FALL WINTER INDEX PAGE
const fallWinterPage = async(req,res)=>{
    try{
        const fallWinter = itemList.fallWinter;
        res.render('categories/fallWinter.ejs', {fallWinter, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// MEN COLOGNE INDEX PAGE
const menColognePage = async(req,res)=>{
    try{
        const menCologne = itemList.menCologne;
        res.render('categories/menCologne.ejs', {menCologne: menCologne, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}



// SHOW
const show = async (req, res) =>{
    try{
        console.log(req.params.id)
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
    wishList,
    summerSpringPage,
    fallWinterPage,
    menColognePage,
    show,
    addToWishList,
}