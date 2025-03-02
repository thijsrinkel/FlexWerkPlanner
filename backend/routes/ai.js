const express = require('express');
const router = express.Router();
const axios = require('axios');

// Generate AI schedule
router.post('/generate-schedule', async (req, res) => {
  const { employees, shifts } = req.body;

  try {
    const response = await axios.post('http://localhost:5001/generate-schedule', { employees, shifts });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;