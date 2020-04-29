const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const userMiddleware = require('./middleware/userMiddleware');

// Routes user
router.get('/user', userController.getAll);
router.post('/user', userController.create);
router.get('/user/:id/:userFirstName', userController.getOne);
router.patch('/user/:id/:userFirstName', userMiddleware.isUser, userController.update);
router.delete('/user/:id/:userFirstName', userMiddleware.isUser, userController.update);

// Route image





module.exports = router;