const Problem = require('../models/ProblemModel');

const getProblem = async (req, res) => {
    try {
        const problems = await Problem.find().select('title difficulty acceptance');
        console.log(problems);
        res.json({ problems });
    } catch (error) {
        console.log("Error finding all problems:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const getProblemById = async (req, res) => {
    const { id } = req.params;
    try {
        const problem = await Problem.findById(id);
        if (!problem) {
            return res.status(404).json({ error: "Problem not found" });
        }
        res.json({ problem });
    } catch (error) {
        console.log("Error finding problem by ID:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const createProblem = async (req, res) => {
    const { title, description, difficulty, acceptance, exampleIn, exampleOut, testCases } = req.body;

    // Basic validation
    if (!title || !description || !difficulty || !acceptance || !exampleIn || !exampleOut || !testCases) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const problem = new Problem({
            title,
            description,
            difficulty,
            acceptance,
            exampleIn,
            exampleOut,
            testCases
        });
        await problem.save();
        res.status(201).json({ problem });
    } catch (error) {
        console.log("Error creating problem:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createProblem, getProblem, getProblemById };