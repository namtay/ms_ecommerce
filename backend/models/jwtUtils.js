const jwt = require('jsonwebtoken');

const JWT_SECRET_KEY = 'your_secret_key_here';

function generateToken(userId) {
    return jwt.sign({ userId }, JWT_SECRET_KEY);
}

function verify(token) {
    const valueReturned = jwt.verify(token, JWT_SECRET_KEY)  
    return jwt.verify(token, JWT_SECRET_KEY);
   
}

// Middleware to verify JWT token
function verifyToken(req, res, next) {   
    const token = req.headers.authorization;    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. No token provided.' });
    }

    try {
       
        const decoded = verify(token);
        
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized. Invalid token.'});
    }
}

module.exports = {
    generateToken,
    verifyToken,
    verify
};
