// CONSTANTS / LIBRARIES ==============================================
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const db = require('./db');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');




// ROUTES =============================================================
app.use(express.json()); // This express middleware places parsed data in req.


// CONTACTS ROUTER
const contactsRouter = require('./routes/contacts');
app.use('/contacts', contactsRouter);


// CONNECTION TO SERVER/DB ===============================================

db.connectDB(() => {

    app.listen(PORT, () => console.log("Server started."))
    // console.log(swag.swaggerDocs)

})


// SWAGGER DOCUMENTATION ======================================================

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Contacts API',
            version: '1.0.0'
        },
    },
    apis: ['./routes/contacts.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


module.exports = {
    swaggerDocs,
    swaggerOptions
}
