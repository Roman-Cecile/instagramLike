const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
// const userMiddleware = require('./middleware/userMiddleware');
const imageController = require('./controllers/imageController');
const commentController = require('./controllers/commentController');
const likeController = require('./controllers/likeController');

// Routes user
router.get('/user', userController.getAll);
router.post('/user', userController.create);
router.get('/user/:id/:userFirstName', userController.getOne);
router.patch('/user/:id/:userFirstName', userController.update);
router.delete('/user/:id/:userFirstName', userController.delete);

// Route image
router.get('/image', imageController.getAll);
router.post('/image', imageController.create);
router.get('/image/:id', imageController.getOne);
router.patch('/image/:id', imageController.update);
router.delete('/image/:id', imageController.delete);

// Route comment
router.get('/comment', commentController.getAll);
router.post('/comment', commentController.create);
router.get('/comment/:id', commentController.getOne);
router.patch('/comment/:id', commentController.update);
router.delete('/comment/:id', commentController.delete);

// Route like
router.get('/like', likeController.getAll);
router.post('/like', likeController.create);
router.get('/like/:id', likeController.getOne);
router.delete('/like/:id', likeController.delete);




module.exports = router;