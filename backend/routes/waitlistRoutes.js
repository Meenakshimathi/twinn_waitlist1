const express = require("express");
const router = express.Router();

const Waitlist = require("../models/Waitlist");

router.post("/join", async (req, res) => {
  try {
    const { fullName, email, business, phone } = req.body;

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

module.exports = router;