const express = require('express');
const router = express.Router();
const pool = require('../db');
const { authenticate } = require('../middleware'); // or adjust path if needed

// Create new application
router.post('/', authenticate, async (req, res) => {
  const user_id = req.user.id;
const {
  program_id,
  full_name,
  email,
  phone,
  address,
  education_level,
  message
} = req.body;


  try {
const result = await pool.query(
  `INSERT INTO applications (
    user_id,
    program_id,
    full_name,
    email,
    phone,
    address,
    education_level,
    message,
    status,
    applied_at
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'pending', NOW()) RETURNING *`,
  [
    user_id,
    program_id,
    full_name,
    email,
    phone,
    address,
    education_level,
    message
  ]
);


    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating application' });
  }
});

module.exports = router;
