// userRoutes.js file
const express = require('express');
const router = express.Router();
const {loginUser, registerUser,getMe} = require('../controllers/userController.js');
const {protect} = require('../middleware/authMiddleware.js');


router.post('/', registerUser)

router.post('/login',loginUser)

router.get('/me',protect,getMe)

module.exports = router;