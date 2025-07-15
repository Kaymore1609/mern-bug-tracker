const express = require('express');
const router = express.Router();

// Example in-memory bug data (you can replace this with a database later)
let bugs = [
  { id: 1, title: 'Login button not working', status: 'open' },
  { id: 2, title: 'Dashboard not loading', status: 'in progress' }
];

// @desc    Get all bugs
// @route   GET /api/bugs
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json(bugs);
});

// @desc    Get a single bug by ID
// @route   GET /api/bugs/:id
// @access  Public
router.get('/:id', (req, res) => {
  const bug = bugs.find(b => b.id === parseInt(req.params.id));
  if (!bug) {
    return res.status(404).json({ message: 'Bug not found' });
  }
  res.json(bug);
});

// @desc    Create a new bug
// @route   POST /api/bugs
// @access  Public
router.post('/', (req, res) => {
  const { title, status } = req.body;
  const newBug = {
    id: bugs.length + 1,
    title,
    status: status || 'open'
  };
  bugs.push(newBug);
  res.status(201).json(newBug);
});

// @desc    Update a bug
// @route   PUT /api/bugs/:id
// @access  Public
router.put('/:id', (req, res) => {
  const bug = bugs.find(b => b.id === parseInt(req.params.id));
  if (!bug) {
    return res.status(404).json({ message: 'Bug not found' });
  }
  const { title, status } = req.body;
  if (title) bug.title = title;
  if (status) bug.status = status;
  res.json(bug);
});

// @desc    Delete a bug
// @route   DELETE /api/bugs/:id
// @access  Public
router.delete('/:id', (req, res) => {
  bugs = bugs.filter(b => b.id !== parseInt(req.params.id));
  res.status(200).json({ message: 'Bug deleted' });
});

module.exports = router;

