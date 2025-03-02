const express = require('express');
const router = express.Router();
const pool = require('../config/db'); // Assumes you have a db.js file for PostgreSQL connection

// Get all shifts
router.get('/', async (req, res) => {
  try {
    const shifts = await pool.query('SELECT * FROM shifts');
    res.json(shifts.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new shift
router.post('/', async (req, res) => {
  const { date, time, duration, employeeId } = req.body;

  try {
    await pool.query('INSERT INTO shifts (date, time, duration, employee_id) VALUES ($1, $2, $3, $4)', [date, time, duration, employeeId]);
    res.status(201).send('Shift added successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a shift
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { date, time, duration, employeeId } = req.body;

  try {
    await pool.query('UPDATE shifts SET date = $1, time = $2, duration = $3, employee_id = $4 WHERE id = $5', [date, time, duration, employeeId, id]);
    res.send('Shift updated successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a shift
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM shifts WHERE id = $1', [id]);
    res.send('Shift deleted successfully');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;