const Skill = require('../models/Skill');

exports.createSkill = async (req, res) => {
  const { name, description, mentor } = req.body;

  try {
    const newSkill = new Skill({
      name,
      description,
      mentor
    });

    const skill = await newSkill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().populate('mentor', ['name', 'email']);
    res.json(skills);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id).populate('mentor', ['name', 'email']);
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Skill not found' });
    }
    res.status(500).send('Server Error');
  }
};

exports.updateSkill = async (req, res) => {
  const { name, description } = req.body;

  try {
    let skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }

    skill.name = name || skill.name;
    skill.description = description || skill.description;

    await skill.save();
    res.json(skill);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ msg: 'Skill not found' });
    }

    await skill.remove();
    res.json({ msg: 'Skill removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Skill not found' });
    }
    res.status(500).send('Server Error');
  }
};

