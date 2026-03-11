const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: String,
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    description: String,
    image: String,
    status: { type: String, default: 'active' }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);