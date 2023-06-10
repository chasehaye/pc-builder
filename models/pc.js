const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pcSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    case: {type: String, required: true},
    motherboard: {type: String, required: true},
    cpu: {type: String, required: true},
    gpu: {type: String, required: true},
    ram: {type: String, required: true},
    storage: {type: String, required: true},
    psu: {type: String, required: true},
    cost: {type: String, required: true},
    }, {
        timestamps: true,
});


module.exports = mongoose.model('Pc', pcSchema);