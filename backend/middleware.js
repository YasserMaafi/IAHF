const jwt = require('jsonwebtoken'); // JSON Web Token library

/**
 * Middleware to authenticate users by verifying their JWT token.
 */
function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]; // Expected format: "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user payload (e.g., { id, role }) to request
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}

/**
 * Middleware factory to authorize users by role(s).
 * @param {Array} roles - Array of roles allowed to access the route.
 */
function authorize(roles = []) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Access denied - insufficient privileges' });
    }
    next();
  };
}

module.exports = { authenticate, authorize };
