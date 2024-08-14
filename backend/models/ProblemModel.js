const mongoose = require('mongoose');

// Define the schema for a test case
const testCaseSchema = new mongoose.Schema({
    input: {
        type: String,
        required: true,
    },
    expectedOutput: {
        type: String,
        required: true,
    },
});

// Define the schema for a problem
const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    difficulty: {
        type: String,
        required: true,
    },
    acceptance: { 
        type: String,
        required: true,
    },
    description: { 
        type: String,
        required: true,
    },
    exampleIn: { 
        type: String,
        required: true,
    },
    exampleOut: { 
        type: String,
        required: true,
    },
    testCases: [testCaseSchema],
}, { timestamps: true });

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
