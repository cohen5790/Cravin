const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    address: String,
    price: {
        type: Number,
        min: 1,
        max: 5
    },
    activity: [{ type: Schema.Types.ObjectId, ref: "Tag"}],
    base: [{ type: Schema.Types.ObjectId, ref: "Tag"}],
    character: [{ type: Schema.Types.ObjectId, ref: "Tag"}],
    flavour: {
        type: Number,
        min: 1,
        max: 5,
    }
})

module.exports = mongoose.model('Resto', restaurantSchema);