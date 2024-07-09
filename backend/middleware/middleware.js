const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const authToken = async (req, res, next) => {
    try {
        let token = req.body.token;

        if (!token && req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' '), [1];
        }

        if (!token) {
            return res.status(404).json({ error: "token not provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res.status(401).json({ error: "unauthorized - invalid token" });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            console.log("User not found for ID:", decoded.userId);
            return res.status(401).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = authToken;