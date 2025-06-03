/** @format */

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");

// Load environment variables
require("dotenv").config();

// Passport Google OAuth configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/auth/google/callback",
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Here you would typically:
        // 1. Check if user exists in your database
        // 2. Create user if they don't exist
        // 3. Return the user object

        // For now, we'll just return the profile
        return done(null, profile);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// Serialize user for the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

// JWT configuration
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Change this in production
const JWT_EXPIRES_IN = "24h";

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user.id,
      email: user.emails[0].value,
      name: user.displayName,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Invalid token");
  }
};

module.exports = {
  passport,
  generateToken,
  verifyToken,
};
