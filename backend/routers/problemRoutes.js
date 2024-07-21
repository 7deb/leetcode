const express = require('express');
const router = express.Router();
const authToken = require('../middleware/middleware');
const { createProblem, getProblems } = require('../controllers/problemController');

router.post('/create',authToken,createProblem);
router.post('/',getProblems);

module.exports = router;