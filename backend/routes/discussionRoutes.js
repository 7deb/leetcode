const express = require('express');
const { createDiscussion, getDiscussion, addReply } = require('../controllers/discussionController'); // Ensure the correct function names are used
const authToken = require('../middleware/middleware');
const router = express.Router();

router.post('/', authToken, createDiscussion);
router.get('/:problemId', authToken, getDiscussion); // Ensure the correct function name is used here
router.post('/reply/:discussionId', authToken, addReply);

module.exports = router;
