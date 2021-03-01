const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// start app
const app = express();
app.use(express.json());
app.use(cors());

// connect DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false });

// import all models 
requireDir('./src/models');

// set routes for /api 
app.use('/api', require('./src/routes'));

app.listen(3000, () => {
    console.log('server running on port 3000');
});