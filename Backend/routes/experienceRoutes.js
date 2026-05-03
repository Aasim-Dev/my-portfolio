const express = require("express");
const Experience = require("../models/Experience");
const router = express.Router();

router.post("/", async (req, res) => {
    const experience = new Experience(req.body);
    await experience.save();
    res.json(experience);
});

router.get("/", async (req, res) => {
    const experiences = await Experience.find();
    res.json(experiences);
});

module.exports = router;
