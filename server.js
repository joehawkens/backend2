// CONSTANTS / LIBRARIES ==============================================
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const db = require('./db');



// ROUTES =============================================================
app.use(express.json()); // This express middleware places parsed data in req.


// CONTACTS ROUTER
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);


// CONNECTION TO SERVER/DB ===============================================

db.connectDB(() => {

    app.listen(PORT, () => console.log("Server started."))

})

