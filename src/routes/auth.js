const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.post('/register' , UserController.signup);
router.post('/login' , UserController.login);

module.exports = router;