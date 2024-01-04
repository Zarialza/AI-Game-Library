const express = require('express');
const userController = require('../controller/user')

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/detail/:email', userController.findUser);
router.post('/add', userController.addUser);
router.delete('/delete/:userId', userController.deleteUser);
router.get('/user-details/:userId', userController.getUserDetails);
router.put('/update/:userId', userController.updateUser);

module.exports = router;