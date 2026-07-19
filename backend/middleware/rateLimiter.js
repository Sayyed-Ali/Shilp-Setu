const rateLimit = require("express-rate-limit")

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // max 5 requests per window
    message: {
        success: false,
        message: "Too many attempts, please try again after 15 minutes"
    },
    standardHeaders: true,
    legacyHeaders: false
})

module.exports = { authLimiter }