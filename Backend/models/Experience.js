const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model("Experience", ExperienceSchema);
