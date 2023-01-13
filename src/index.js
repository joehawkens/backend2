const express = require('express');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
require('dotenv').config({ path: 'src/config.env' });
const app = express();
const port = process.env.port || 3000;
const connectionString = process.env.DB_URL

// Database Connection =============================================

mongoose.connect(connectionString);
const database = mongoose.connection;


database.on('error',  (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log("Database Connected.")
})


// Express app =======================================================

app.use(express.json);
app.listen(port, () => {
    console.log(`server started at ${port}`)
})















