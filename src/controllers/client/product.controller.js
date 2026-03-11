const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
    try {
        const products = await Product.find({
            status: "active"
        });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};