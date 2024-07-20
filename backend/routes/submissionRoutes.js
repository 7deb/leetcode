const express = require('express');
const { getSubmissionsByProblemId, createSubmission } = require('../controllers/submissionController');
const authToken = require('../middleware/middleware'); // Ensure authToken is properly imported
const router = express.Router();

router.get('/:problemId', authToken, getSubmissionsByProblemId);
router.post('/', authToken, createSubmission);

module.exports = router;
