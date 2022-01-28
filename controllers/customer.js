const Resto = require('../models/restaurants')
const Tag = require('../models/tags')
let mongoose = require('mongoose')

module.exports = {
    indexMatches,
    addSearch,
    show,
}

function addSearch(req, res) {
    Tag.find({}, function(err, tags) {
        res.render('customer/profile', { tags })
    })    
}

function indexMatches(req, res) {
    if(req.query.base === undefined) {
        Resto.find({activity: req.query.activity, character: req.query.character}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    }
    else if(req.query.activity === undefined && req.query.base === undefined) {
        Resto.find({character: req.query.character}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    } 
    else if(req.query.activity === undefined) {
        Resto.find({base: req.query.base, character: req.query.character}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    } 
    else if(req.query.activity === undefined && req.query.character === undefined) {
        Resto.find({base: req.query.base}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    } 
    else if(req.query.character === undefined) {
        Resto.find({activity: req.query.activity, base: req.query.base}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    } 
    else if(req.query.character === undefined && req.query.base === undefined) {
        Resto.find({activity: req.query.activity}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    } 
    else {
        Resto.find({activtiy: req.query.activity, base: req.query.base, character: req.query.character}, function(err, restaurants){
            res.render('customer/index', { restaurants })
        })
    }
}

function show(req, res) {
    Resto.findById(req.params.id).populate('activity').populate('base').populate('character').exec(function(err, restaurant) { 
        res.render('customer/show', { restaurant })
    })
}
















// function createSearch(req, res) {
//     let newSearch = new Search({
//         name: req.body.name,
//         address: req.body.address,
//         price: req.body.price,
//         flavour: req.body.flavour,
//         veggie: req.body.veggie
//     })
//     if(typeof req.body.activity === 'string'){ 
//         newSearch.activity.push(req.body.activity)
//     } else {
//         req.body.activity.forEach(function(item) {
//             newSearch.activity.push(item) 
//         })
//     }
//     if(typeof req.body.base === 'string'){
//         newSearch.base.push(req.body.base)
//     } else {
//         req.body.base.forEach(function(item) {
//             newSearch.base.push(item) 
//         })
//     }
//     if(typeof req.body.character === 'string'){
//         newSearch.character.push(req.body.character)
//     } else {
//         req.body.character.forEach(function(item) {
//             newSearch.character.push(item) 
//         })
//     }
//     newSearch.save(function(err) {
//         console.log(err)
//     })
//     console.log(newSearch)
//     res.redirect('/customer/index')   
// }

