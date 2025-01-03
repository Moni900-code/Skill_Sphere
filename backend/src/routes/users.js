const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

router.get('/', auth, roleCheck(['admin']), getAllUsers);
router.get('/:id', auth, getUserById);
router.put('/:id', auth, roleCheck(['admin']), updateUser);
router.delete('/:id', auth, roleCheck(['admin']), deleteUser);

module.exports = router;

