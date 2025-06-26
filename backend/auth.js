// Import required modules
const express = require('express');          // Express framework for building the server
const router = express.Router();             // Create a router instance for defining routes
const pool = require('./db');                // Database connection pool
const bcrypt = require('bcryptjs');          // For password hashing
const jwt = require('jsonwebtoken');         // For creating JSON Web Tokens (authentication)

// SIGN UP ROUTE - Creates a new user
router.post('/signup', async (req, res) => {
  // Extract user details from request body
  const { username, email, password, role } = req.body;
  
  try {
    // Hash the password with bcrypt (10 is the salt rounds)
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Insert new user into database and return the created user
    const result = await pool.query(
      'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, hashedPassword, role]
    );
    
    // Send back the newly created user (without password)
    res.json({ user: result.rows[0] });
  } catch (err) {
    // Handle errors (like duplicate email or invalid role)
    res.status(400).json({ error: 'User already exists or invalid role' });
  }
});

// LOGIN ROUTE - Authenticates existing users
router.post('/login', async (req, res) => {
  // Extract login credentials from request body
  const { email, password } = req.body;
  
  try {
    // Find user by email in database
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    // If no user found, return error
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    const user = result.rows[0];  // Get the user record
    
    // Compare provided password with hashed password in database
    const valid = await bcrypt.compare(password, user.password);
    
    // If password doesn't match, return error
    if (!valid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create JWT token containing user ID and role
    const token = jwt.sign(
      { id: user.id, role: user.role },  // Payload (data to include in token)
      process.env.JWT_SECRET,             // Secret key from environment variables
      { expiresIn: '1h' }                // Token expires in 1 hour
    );

    // Return the token and user role to the client
    res.json({ token, role: user.role });
  } catch (err) {
    // Handle server errors
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router to be used in other files
module.exports = router;