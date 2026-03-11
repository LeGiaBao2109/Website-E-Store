require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const clientRoutes = require("./src/routes/client/index.route");

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/EStore_Project_New';

mongoose.connect(mongoURI)
    .then(() => console.log('Kết nối MongoDB thành công!'))
    .catch(err => console.error('Lỗi kết nối MongoDB:', err.message));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/public')));

clientRoutes(app);

app.listen(port, () => {
    console.log(`Website đang chạy trên cổng ${port}`);
});