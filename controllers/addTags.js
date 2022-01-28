const Tag = require('../models/tags')

module.exports = {
    createTag,
    addTag,
}

function addTag(req, res) {
    Tag.find({}, function(err, tags) {
        console.log(tags)
    res.render('tags/addTags')
})
}

function createTag(req, res) {
    Tag.create(req.body, function(err) {
        console.log(err)
        res.redirect('/tags/addTags')
    })
}