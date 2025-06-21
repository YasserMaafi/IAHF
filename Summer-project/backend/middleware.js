const jwt = require('jsonwebtoken');  // Import JWT library for token verification

/**
 * Middleware to authenticate users by verifying their JWT token
 * - Checks for token in Authorization header
 * - Verifies token using secret key
 * - Attaches decoded user data to request object
 */
function authenticate(req, res, next) {
  // Get token from Authorization header (format: "Bearer <token>")
  const token = req.headers.authorization?.split(' ')[1];  // Optional chaining in case header is missing
  
  // If no token found, return 401 Unauthorized
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    // Verify token using secret key from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach decoded user payload (containing id and role) to request object
    req.user = decoded;
    
    // Proceed to next middleware/route handler
    next();
  } catch (err) {
    // If token verification fails (expired/invalid), return 401 Unauthorized
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/**
 * Middleware factory to authorize users based on their roles
 * @param {Array} roles - Array of allowed roles (e.g., ['admin', 'agent'])
 * @returns Middleware function that checks if user's role is authorized
 */
function authorize(roles = []) {
  // Return a middleware function that checks authorization
  return (req, res, next) => {
    // Check if user's role (from authenticate middleware) is included in allowed roles
    if (!roles.includes(req.user.role)) {
      // If not authorized, return 403 Forbidden
      return res.status(403).json({ error: 'Access denied - insufficient privileges' });
    }
    
    // If authorized, proceed to next middleware/route handler
    next();
  };
}

// Export the middleware functions for use in other files
module.exports = { authenticate, authorize };