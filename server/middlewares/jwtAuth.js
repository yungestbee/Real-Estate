const jwt = require("jsonwebtoken");
const httpStatus = require("http-status-codes");

const verifyToken = (req, res, next) => {
    const secret = process.env.secretkey;

    try {
        // Get the token from the request headers or cookies
        console.log(req.cookies.jwt)
        const token = req.headers.authorization || req.cookies.jwt;


        if (!token) {
            return res
                .status(httpStatus.UNAUTHORIZED)
                .send("Access denied. Token missing.");
        }

        // Verify the token
        jwt.verify(token, secret, (error, decoded) => {
            if (error) {
                console.error('JWT verification failed:', error.message);
                return res
                    .status(httpStatus.UNAUTHORIZED)
                    .send("Access denied. Invalid token.");
            } else {
                console.log('Decoded token:', decoded);
                req.user = decoded;
                next();
            }
        });
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(httpStatus.BAD_REQUEST).json("Invalid token");
    }
};

module.exports = verifyToken;
