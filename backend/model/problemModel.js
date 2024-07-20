const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: { type: String, required: true, enum: ["easy", "medium", "hard"] },
}, { timestamps: true });

const problem = new mongoose.model("Problems", problemSchema);

module.exports = problem;