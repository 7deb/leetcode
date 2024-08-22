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
        minlength: 5,  // Example constraint
        maxlength: 100, // Example constraint
    },
    difficulty: {
        type: String,
        required: true,
        enum: ['easy', 'medium', 'hard'], // Example enum values
    },
    acceptance: { 
        type: String,
        required: true,
        enum: ['high', 'medium', 'low'], // Example enum values
    },
    description: { 
        type: String,
        required: true,
        minlength: 10,  // Example constraint
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

// Add index for better performance on commonly queried fields
problemSchema.index({ title: 1, difficulty: 1 });

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;