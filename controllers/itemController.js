const Item = require('../models/Item')
const Account = require('../models/User')
const itemList = require('../models/itemsList')
const mongoose = require('mongoose')

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
const create = async(req, res)=>{
    try{
        const newItem = await Item.create(req.body)
        console.log(newItem)
        res.redirect('/')
    }catch(err){
        console.log(err)
    }
}

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

// WISH LIST PAGE
const wishList = async(req, res) =>{
    try{
        res.render('wishList.ejs', {wishList, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// ACCOUNT PAGE
const accountPage = async(req, res)=>{
    try{
        res.render('account.ejs', {accountPage, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}


// SUMMER SPRING INDEX PAGE
const springSummerPage = async(req,res) => {
    try{
        const springSummer = itemList.springSummer;
        res.render('categories/springSummer.ejs', {springSummer, currentUser: req.session.currentUser})
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

// SPECIAL PAGE FOR USER
const specialPage = async(req, res)=>{
    try{
        const specialScent = itemList.specialScent;
        res.render("categories/special.ejs", {specialScent, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}



// SHOW
const show = async (req, res) =>{
    try{
        console.log(req.params.id)
        const index = req.params.id
        const itemId = mongoose.Types.ObjectId(index);
        const item = await Item.findById(itemId);
        console.log(item)
        res.render('show.ejs',
        {
            item,
            tabTile: item.name,
            currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

// Edit Account 
const accountEdit = async(req, res)=>{
    try{
        const index = req.params.id
        const account = await Account.findById(index)
        res.render('edit.ejs', {accounts: account, tabTitle: 'Edit'})
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
    springSummerPage,
    fallWinterPage,
    menColognePage,
    show,
    addToWishList,
    specialPage,
    create,
    accountEdit,
    accountPage,
}