require('dotenv').config();
const express = require('express');
const router = express.Router()
const db = require('../db');



// Getting all
router.get('/', (req, res) => {
    
    db.get().collection('contacts').find({}).toArray()
    .then((contacts) => {
        console.log('Conacts', contacts);
    });
   // res.send('Hello World.')

})

// // Getting one
// router.get('/:id', (req, res) => {
    

// })


// // Creating one
// router.post('/', (req, res) => {
    

// })

// // Update
// router.patch('/', (req, res) => {
    

// })


// // Delete
// router.delete('/', (req, res) => {
    

// })


module.exports = router;