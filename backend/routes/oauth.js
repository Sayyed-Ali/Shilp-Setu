const express = require("express")
const router = express.Router()
const passport = require("../config/passport")
const jwt = require("jsonwebtoken")

function generateToken(id, role) {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

// GET /api/auth/google — redirect to Google consent screen
router.get("/google",
    passport.authenticate("google", { scope: ["profile", "email"], session: false })
)

// GET /api/auth/google/callback — Google redirects back here after user grants permission
router.get("/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: `${process.env.FRONTEND_URL}/login?error=oauth_failed` }),
    (req, res) => {
        const token = generateToken(req.user._id, req.user.role)
        const user = {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role
        }

        // redirect to frontend with token in URL — frontend reads it and stores in localStorage
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}&user=${encodeURIComponent(JSON.stringify(user))}`)
    }
)

module.exports = router