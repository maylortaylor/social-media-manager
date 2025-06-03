/** @format */

const express = require("express");
const router = express.Router();
const { passport, generateToken } = require("../config/auth");
const { authenticateToken } = require("../middleware/auth");

// Google OAuth login route
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    // Generate JWT token
    const token = generateToken(req.user);

    // Redirect to frontend with token
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`);
  }
);

// Protected route example
router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Get current user
router.get("/me", authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
