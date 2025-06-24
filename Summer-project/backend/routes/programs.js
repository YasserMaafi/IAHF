const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /api/programs - Get all programs or filter by category
router.get('/', async (req, res) => {
  try {
    let query = 'SELECT * FROM programs';
    const params = [];
    
    // Filter by category if provided
    if (req.query.category) {
      query += ' WHERE category = $1';
      params.push(req.query.category);
    }
    
    // Add ordering
    query += ' ORDER BY id ASC';
    
    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching programs:', err);
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
});

// GET /api/programs/:id - Get a specific program
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM programs WHERE id = $1', [id]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Program not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching program:', err);
    res.status(500).json({ error: 'Failed to fetch program' });
  }
});

module.exports = router;