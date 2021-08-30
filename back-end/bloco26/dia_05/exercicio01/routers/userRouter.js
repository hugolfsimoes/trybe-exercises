const express = require("express");
const router = express.Router();

const {
  isValidUsername,
  isValidEmail,
  isValidPassword,
} = require("../middlewares/validations");

router.post(
  "/register",
  isValidUsername,
  isValidEmail,
  isValidPassword,
  (_req, res) => {
    return res.status(201).json({ messame: "user created" });
  }
);

router.post("/login", isValidEmail, isValidPassword, (_req, res) => {
  res.status(200).json({ token: "86567349784e" });
});

module.exports = router;
