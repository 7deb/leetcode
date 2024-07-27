const express = require('express');
const { getProblem, getProblemById, createProblem } = require('../controllers/problemController');
const authToken = require('../middleware/middleware');
const router = express.Router();

router.get('/', getProblem); // Use GET method for fetching problems
router.get('/:id', getProblemById); // Use GET method for fetching problem by ID
router.post('/', authToken, createProblem); // Use POST method for creating problems

module.exports = router;
