// CONSTANTS / LIBRARIES ==============================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;


// CONNECTION TO DATABASE ==============================================
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL);
const db =  mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database.'))


// CONNECTION TO SERVER ==============================================
app.listen(PORT, () => console.log("Server started."))


// ROUTES ============================================================


// CONTACTS ROUTE
const contactsRoute = require('./routes/contacts');
app.use(express.json);
app.use('/contacts', contactsRoute);


