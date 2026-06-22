const express = require("express");
const router = express.Router();

const Waitlist = require("../models/Waitlist");

// Join Waitlist
router.post("/join", async (req, res) => {
  try {
    const { fullName, email, business, phone } = req.body;

    const existingUser = await Waitlist.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const user = new Waitlist({
      fullName,
      email,
      business,
      phone,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Joined Waitlist Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// Count
router.get("/count", async (req, res) => {
  try {
    const count = await Waitlist.countDocuments();

    res.json({
      success: true,
      totalWaitlistUsers: count,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// All Users
router.get("/all", async (req, res) => {
  try {
    const users = await Waitlist.find().sort({
      createdAt: -1,
    });

    res.json({
      totalUsers: users.length,
      users,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;