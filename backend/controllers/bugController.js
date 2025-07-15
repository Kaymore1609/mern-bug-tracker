const Bug = require('../models/Bug');

// GET all bugs
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

// POST a new bug
exports.createBug = async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

// PUT update bug status
exports.updateBug = async (req, res, next) => {
  try {
    const updated = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE a bug
exports.deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    next(err);
  }
};
