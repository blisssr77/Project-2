const Item = require('../models/Item')

// NEW
// items/new
const newForm = (req, res)=>{
    try{
        res.render('new.ejs',{
            tabTitle: 'New Item',
            // currentUser: req.session.currentUser
        })
    }catch(err){
        console.log(err)
    }
}

// CREATE / POST

// HOME
const home = async(req,res) =>{
    try{
        res.render('home.ejs', {tabTitle: 'Home Page'})
    }catch(err){
        console.log(err)
    }
}

const cart = async(req, res) =>{
    try{
        res.render('myCart.ejs', {tabTitle: 'My Cart'})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX
const melee = async(req,res)=>{
    try{
        res.render('categories/melee.ejs', {tabTitle: 'Melee Items'})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX
const pistol = async(req,res)=>{
    try{
        res.render('categories/pistol.ejs', {tabTitle: 'Pistols'})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX
const machineGun = async(req,res)=>{
    try{
        res.render('categories/machineGun.ejs', {tabTitle: 'Machine Guns'})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX
const sniper = async(req,res)=>{
    try{
        res.render('categories/sniper.ejs', {tabTitle: 'Snipers'})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX
const armor = async(req,res)=>{
    try{
        res.render('categories/armor.ejs', {tabTitle: 'Armors'})
    }catch(err){
        console.log(err)
    }
}

// MELEE INDEX
const mustHaveItem = async(req,res)=>{
    try{
        res.render('categories/mustHaveItem.ejs', {tabTitle: 'Must have Items'})
    }catch(err){
        console.log(err)
    }
}

// INDEX / index route
const index = async(req, res)=>{
    try{

    }catch(err){
        console.log(err)
    }
}

// SHOW

// SEED

// DELETE

// EDIT - "/id/edit"

// PUT - "items/:id"

module.exports = {
    home,
    new: newForm,
    cart,
    melee,
    pistol,
    machineGun,
    sniper,
    armor,
    mustHaveItem,
}