const { Pool } = require('pg');         // Import the pg library
require('dotenv').config();             // Load .env file

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,  // Use your DB URL from .env
});

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL database'))
  .catch(err => console.error('❌ PostgreSQL connection error:', err));

module.exports = pool;  // Export the connection so other files can use it
