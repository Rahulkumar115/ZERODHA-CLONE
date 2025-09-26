const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const User = require("../model/User");

const router = express.Router();

router.use(cookieParser());

// If this is your main app file (e.g., index.js or app.js), set CORS as:
router.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], // Frontend and Dashboard
  credentials: true,
}));

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET || "secretkey", { expiresIn: "1h" });

    // Set token as HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000,
    });

    res.status(201).json({
      message: "Signup successful",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (err) {
    res.status(500).json({ message: "Error in signup" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "secretkey", { expiresIn: "1h" });

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 3600000,
    });

    res.json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: "Error in login" });
  }
});

// Route to check token validity for dashboard
router.get("/check", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ valid: false });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secretkey");
    res.json({ valid: true, userId: decoded.id });
  } catch {
    res.status(401).json({ valid: false });
  }
});

module.exports = router;