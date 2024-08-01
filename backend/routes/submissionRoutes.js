const express = require('express');
const { getSubmissionsByProblemId, createSubmission, getuserDetails, } = require('../controllers/submissionController');
const authToken = require('../middleware/middleware'); // Ensure authToken is properly imported
const router = express.Router();

router.get('/me', authToken, getuserDetails);
router.get('/:problemId', authToken, getSubmissionsByProblemId);
router.post('/', authToken, createSubmission);

module.exports = router;
