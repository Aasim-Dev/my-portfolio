const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// POST a new project (for admin use)
router.post("/", async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const newProject = new Project({ title, description, link, image });
    await newProject.save();
    res.status(201).json({ message: "Project added successfully!" });
  } catch (error) {
    console.error("Error adding project:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;