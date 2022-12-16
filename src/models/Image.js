const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
    title: {type: String},
    category: {type: String},
    seri: {type: Number},
    rept: {type: Number},
    filename: {type: String},
    path: {type: String},
    originalname: {type: String},
    mimetype: {type: String},
    size: { type: Number},
    created_at: {type: Date, default: Date.now()}
});

module.exports = model('Image', imageSchema);