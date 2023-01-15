const express = require('express');
const router = express.Router()

// Getting all
router.get('/', (req, res) => {
    res.send('Hello World.')

})

// Getting one
router.get('/:id', (req, res) => {
    

})


// Creating one
router.post('/', (req, res) => {
    

})

// Update
router.patch('/', (req, res) => {
    

})


// Delete
router.delete('/', (req, res) => {
    

})


module.exports = router;