const express = require('express');
const router = express.Router();
const { createSkill, getSkills, getSkillById, updateSkill, deleteSkill } = require('../controllers/skillController');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');

router.post('/', auth, roleCheck(['mentor']), createSkill);
router.get('/', auth, getSkills);
router.get('/:id', auth, getSkillById);
router.put('/:id', auth, roleCheck(['mentor']), updateSkill);
router.delete('/:id', auth, roleCheck(['mentor', 'admin']), deleteSkill);

module.exports = router;

