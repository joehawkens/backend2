// CONSTANTS / LIBRARIES ==============================================
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL);
const db =  mongoose.connection



// CONNECT TO DB ============================================

function connect() {

    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('Connected to Database.'))

}

function get() {

    return db;

}


function close(){

    db.close();

}


module.exports = {
    connect,
    get,
    close
};