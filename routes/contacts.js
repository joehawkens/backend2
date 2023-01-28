require('dotenv').config();
const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db');
const { ObjectId } = require('mongodb');
app.use(express.json());



/**GET ALL
 * @swagger
 * /contacts:
 *   get:
 *     description: Get all Contacts.
 *     responses:
 *       200:
 *         description: Success
 * 
 */

// GET All ===================================================================================================================
router.get('/', (req, res) => {
    
    
    db.getDB().collection('contacts').find({}).toArray()
    .then((contacts) => {
        res.send(contacts)
    });

})


// ROUTES

/**GET
 * @swagger
 * /contacts/{id}:
 *   get:
 *     description: Get a contact by ID.
 *     parameters:
 *        - in: path
 *          name: id
 *          description: ID of the user.
 *     responses:
 *       200:
 *         description: Success
 * 
 */

// GET One ===================================================================================================================
router.get('/:id', (req, res) => {

    if (ObjectId.isValid(req.params.id)){
    db.getDB().collection('contacts')
        .findOne({_id: ObjectId(req.params.id)})
        .then(doc => {
            res.status(200).json(doc)
        })
        .catch(err => {
            res.status(500).json({error: "Could not fetch document."})
        })
    } else {
        res.status(500).json({error: "Could not fetch document."})
    }

    //req.params.id references above /:id


})


/**POST
 * @swagger
 * /contacts:
 *   post:
 *     description: Create an existing contact.
 *     parameters:
 *        - in: body
 *          name: user
 *          description: The user to create
 *          schema:
 *              type: object
 *              required:
 *                - id: string
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  favColor:
 *                      type: string
 *                  birthday:
 *                      type: string
 *     responses:
 *       200:
 *         description: Success
 * 
 */

// POST ========================================================================================================================
router.post('/', (req, res) => {


    const contact = req.body;

    db.getDB().collection('contacts')
        .insertOne(contact)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document.'})
        })
    


})


// PATCH ======================================================================================================================
router.patch('/:id', (req, res) => {
    
    const updates = req.body;

    if (ObjectId.isValid(req.params.id)){
        db.getDB().collection('contacts')
            .updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({error: "Could not update the document."})
            })
    } else {
        res.status(500).json({error: "Not a valid doc id."})
    }
})


/**PUT
 * @swagger
 * /contacts/{id}:
 *   put:
 *     description: Update an existing contact.
 *     parameters:
 *        - in: path
 *          name: id
 *          description: ID of the user.
 *        - in: body
 *          name: user
 *          description: The user to create
 *          schema:
 *              type: object
 *              required:
 *                - id: string
 *              properties:
 *                  firstName:
 *                      type: string
 *                  lastName:
 *                      type: string
 *                  email:
 *                      type: string
 *                  favColor:
 *                      type: string
 *                  birthday:
 *                      type: string
 *                  
 *     responses:
 *       200:
 *         description: Success
 * 
 */

router.put('/:id', (req, res) => {
    
    const updates = req.body;

    if (ObjectId.isValid(req.params.id)){
        db.getDB().collection('contacts')
            .updateOne({_id: ObjectId(req.params.id)}, {$set: updates})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({error: "Could not update the document."})
            })
    } else {
        res.status(500).json({error: "Not a valid doc id."})
    }
})

/**DELETE
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     description: Delete a contact by ID.
 *     parameters:
 *      - in: path
 *        name: id
 *        schema:
 *            type: string
 *        description: String id of user to delete.
 *        required: true
 *     responses:
 *       200:
 *         description: User was deleted.
 * 
 */

// Delete ======================================================================================================================
router.delete('/:id', (req, res) => {
    
    if (ObjectId.isValid(req.params.id)){
        db.getDB().collection('contacts')
            .deleteOne({_id: ObjectId(req.params.id)})
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({error: "Could not delete the document."})
            })
    } else {
        res.status(500).json({error: "Not a valid doc id."})
    }


})


module.exports = router;