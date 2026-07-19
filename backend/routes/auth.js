const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const { body, validationResult } = require("express-validator")
const { authLimiter } = require("../middleware/rateLimiter")

function generateToken(id, role) {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

// validation rules
const registerValidation = [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters")
]

const loginValidation = [
    body("email").isEmail().withMessage("Valid email is required").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required")
]

// POST /api/auth/register
router.post("/register", authLimiter, registerValidation, async (req, res, next) => {
    try {
        // check validation errors
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg
            })
        }

        const { name, email, password, role } = req.body

        const exists = await User.findOne({ email })
        if (exists) {
            return res.status(400).json({ success: false, message: "Email already registered" })
        }

        const user = await User.create({ name, email, password, role })
        const token = generateToken(user._id, user.role)

        res.status(201).json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        })
    } catch (error) {
        next(error)
    }
})

// POST /api/auth/login
router.post("/login", authLimiter, loginValidation, async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: errors.array()[0].msg
            })
        }

        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ success: false, message: "Invalid email or password" })
        }

        const token = generateToken(user._id, user.role)

        res.status(200).json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email, role: user.role }
        })
    } catch (error) {
        next(error)
    }
})

// POST /api/auth/logout — JWT is stateless so just tell frontend to delete token
router.post("/logout", (req, res) => {
    res.status(200).json({ success: true, message: "Logged out successfully" })
})

module.exports = router