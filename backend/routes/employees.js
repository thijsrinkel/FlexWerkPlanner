const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Assumes you have a db.js file for PostgreSQL connection

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await pool.query('SELECT * FROM employees');
    res.json(employees.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new employee
router.post('/', async (req, res) => {
  const { name, availability, maxHours } = req.body;

  try {
    await pool.query('INSERT INTO employees (name, availability, max_hours) VALUES ($1, $2, $3)', [name, availability, maxHours]);
    res.status(201).send('Employee added successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update an employee
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { availability, maxHours } = req.body;

  try {
    await pool.query('UPDATE employees SET availability = $1, max_hours = $2 WHERE id = $3', [availability, maxHours, id]);
    res.send('Employee updated successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an employee
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM employees WHERE id = $1', [id]);
    res.send('Employee deleted successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;