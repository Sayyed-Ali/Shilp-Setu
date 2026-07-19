const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/User")

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
},
    async (accessToken, refreshToken, profile, done) => {
        try {
            // check if user already exists with this Google account
            let user = await User.findOne({ email: profile.emails[0].value })

            if (user) {
                return done(null, user)
            }

            // create new user from Google profile
            user = await User.create({
                name: profile.displayName,
                email: profile.emails[0].value,
                password: "google_oauth_" + profile.id, // placeholder, never used for login
                role: "buyer" // default role for OAuth users
            })

            return done(null, user)
        } catch (error) {
            return done(error, null)
        }
    }))

module.exports = passport