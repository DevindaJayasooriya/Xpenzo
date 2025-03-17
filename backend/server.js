 require ('dotenv').config();
 const express = require('express');
 const cors = require('cors');
 const path = require('path');
const connectedDB = require('./config/dbConfig');
 const app = express();

 //Middleware to handle cors
 app.use(
    cors({
        origin: process.env.CLIENT_URL || '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],    
    }))

app.use(express.json());
connectedDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

