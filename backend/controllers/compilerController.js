const { runTestCases } = require('../services/compilerServices');
const Problem = require('../models/ProblemModel');

const executeCode = async (req, res) => {
    const { code, language, problemId } = req.body;
    try {
        const problem = await Problem.findById(problemId);
        if (!problem) {
            return res.status(404).json({ success: false, error: 'Problem not found' });
        }

        const testCases = problem.testCases;
        const results = await runTestCases(code, language, testCases);

        res.json({ success: true, results });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    executeCode,
};
