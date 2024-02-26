const Item = require('../models/Item')
const { sniper, rifle } = require('../models/itemsList')

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

// PISTOL INDEX PAGE
const pistol = async(req,res)=>{
    try{
        res.render('categories/pistol.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// MACHINE GUN INDEX PAGE
const machineGun = async(req,res)=>{
    try{
        res.render('categories/machineGun.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// SNIPER INDEX PAGE
const sniperPage = async(req,res) => {
    try{
        res.render('categories/sniper.ejs', {sniper: sniper, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// RIFLE INDEX PAGE
const riflePage = async(req,res) => {
    try{
        res.render('categories/rifle.ejs', {rifles: rifle, currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// ARMOR INDEX PAGE
const armor = async(req,res)=>{
    try{
        res.render('categories/armor.ejs', {currentUser: req.session.currentUser})
    }catch(err){
        console.log(err)
    }
}

// MUSTHAVEITEM INDEX PAGE
const mustHaveItem = async(req,res)=>{
    try{
        res.render('categories/mustHaveItem.ejs', {currentUser: req.session.currentUser})
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

// MELEE SEED
const meleeSeed = async (req, res) => {
    try{

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
    sniperPage,
    armor,
    mustHaveItem,
    show,
    addToCart,
}