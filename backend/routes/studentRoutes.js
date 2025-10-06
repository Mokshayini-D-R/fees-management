const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new student
router.post('/', async (req, res) => {
  try {
    const { name, roll, feesPaid } = req.body;
    const student = await Student.create({ name, roll, feesPaid });
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;