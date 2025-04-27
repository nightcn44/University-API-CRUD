const express = require('express');
const router = express.Router();
const User = require('../controllers/user.controllers');

router.post('/ur', User.createUser);
router.get('/ur', User.getAllUsers);
router.get('/ur/:id', User.getUserById)
router.put('/ur/:id', User.updateUserById)
router.delete('/ur/:id', User.deleteUserById)

module.exports = router