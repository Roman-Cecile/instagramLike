const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
// const userMiddleware = require('./middleware/userMiddleware');

// Routes user
router.get('/user', userController.getAll);
router.post('/user', userController.create);
router.get('/user/:id/:userFirstName', userController.getOne);
router.patch('/user/:id/:userFirstName', userController.update);
router.delete('/user/:id/:userFirstName', userController.delete);

// Route image





module.exports = router;