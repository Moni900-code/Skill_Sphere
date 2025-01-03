const express = require('express');
const router = express.Router();
const { createSession, getSessions, getSessionById, updateSession, deleteSession } = require('../controllers/sessionController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

router.post('/', auth, roleCheck(['mentor']), createSession);
router.get('/', auth, getSessions);
router.get('/:id', auth, getSessionById);
router.put('/:id', auth, roleCheck(['mentor']), updateSession);
router.delete('/:id', auth, roleCheck(['mentor', 'admin']), deleteSession);

module.exports = router;

