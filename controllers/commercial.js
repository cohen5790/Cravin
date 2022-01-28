const Resto = require('../models/restaurants')
const Tag = require('../models/tags')

module.exports = {
    index,
    show,
    addResto,
    createResto,
    deleteResto
};

function index(req, res) {
    Resto.find({}, function(err, restaurants) {
        if(err) {
            console.log(err)
            res.redirect('/login')
        }
        res.render('commercial/index', { restaurants })
    })
}

function show(req, res) {
    Resto.findById(req.params.id).populate('activity').populate('base').populate('character').exec(function(err, restaurant) { 
        res.render('commercial/show', { restaurant })
    })
}

function addResto(req, res) {
    Tag.find({}, function(err, tags) {
        res.render('commercial/new', { tags })
    })    
}

function createResto(req, res) {
    let newResto = new Resto({
        name: req.body.name,
        address: req.body.address,
        price: req.body.price,
        flavour: req.body.flavour,
        veggie: req.body.veggie
    })
    if(typeof req.body.activity === 'string'){ 
        newResto.activity.push(req.body.activity)
    } else {
        req.body.activity.forEach(function(item) {
            newResto.activity.push(item) 
        })
    }
    if(typeof req.body.base === 'string'){
        newResto.base.push(req.body.base)
    } else {
        req.body.base.forEach(function(item) {
            newResto.base.push(item) 
        })
    }
    if(typeof req.body.character === 'string'){
        newResto.character.push(req.body.character)
    } else {
        req.body.character.forEach(function(item) {
            newResto.character.push(item) 
        })
    }
    newResto.save(function(err) {
        console.log(err)
    })
    res.redirect('/commercial/index')
}


async function deleteResto(req, res) {
    await Resto.findByIdAndDelete(req.params.id);
    res.redirect('/commercial/index');
  }
