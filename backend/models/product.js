const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Schema **/
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: false
    }, bought: {
        type: Boolean,
        required: false,
        default: false
    }, description: {
        type: String,
        required: false,
        default: '---'
    }
},{ timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Product', productSchema);