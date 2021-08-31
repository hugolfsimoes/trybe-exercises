const express = require("express");
const fs = require("fs").promises;

const router = express.Router();

const {
  isValidCountry,
  isValidInitials,
  isValidname,
} = require("../middlewares/validation");

router.get("/", async (req, res) => {
  try {
    const content = await fs.readFile("../teams.json", "utf-8");
    res.status(200).json(JSON.parse(content));
  } catch (error) {
    return null;
  }
});

router.post(
  "/",
  isValidCountry,
  isValidInitials,
  isValidname,
  async (req, res) => {
    const newTeam = { ...req.body, initials: req.body.initials.toUpperCase() };
    try {
      const arrContent = await fs.readFile("./teams.json", "utf8");
      await arrContent.push(newTeam);
      const team = await fs.writeFile(
        "./teams.json",
        JSON.stringify(arrContent)
      );
      res.status(200).json(team);
    } catch (error) {
      return null;
    }
  }
);

module.exports = router;
