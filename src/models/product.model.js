// const mongoose = require("mongoose");
// const slug = require('mongoose-slug-updater'); // Cài thêm: npm install mongoose-slug-updater

// mongoose.plugin(slug);

// const productSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: String,
//     category_id: { type: String, default: "" },
//     price: { type: Number, default: 0 },
//     discountPercentage: { type: Number, default: 0 },
//     stock: { type: Number, default: 0 },
//     thumbnail: String,
//     images: Array,
//     status: { type: String, default: "active" },
//     featured: { type: String, default: "0" }, // "1" là nổi bật, "0" là không
//     position: Number,
//     slug: { type: String, slug: "title", unique: true }, // Tự động tạo slug từ title
//     deleted: { type: Boolean, default: false },
//     deletedAt: Date
// }, { timestamps: true });

// const Product = mongoose.model("Product", productSchema, "products");
// module.exports = Product;