// CONSTANTS / LIBRARIES ==============================================
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const db = require('./db')


// CONNECTION TO DATABASE ==============================================
// mongoose.set('strictQuery', true);
// mongoose.connect(process.env.DB_URL);
// const db =  mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database.'))



// ROUTES =============================================================
app.use(express.json());


// CONTACTS ROUTER
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);


// CONNECTION TO SERVER/DB ===============================================

db.connect(() => {

    app.listen(PORT, () => console.log("Server started."))

})

