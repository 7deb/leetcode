const express = require("express");
const { check, validationResult } = require('express-validator'); // Optional: For request validation
const compilerController = require('../controllers/compilerController');

const router = express.Router();

// Route to execute code
router.post('/execute', [
    // Optional: Add validation middleware
    check('code').notEmpty().withMessage('Code is required'),
    check('language').isIn(['cpp', 'python']).withMessage('Invalid language'),
    check('problemId').isMongoId().withMessage('Invalid problem ID')
], async (req, res, next) => {
    // Validation result
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    // Call the controller function
    try {
        await compilerController.executeCode(req, res);
    } catch (error) {
        next(error); // Pass errors to the error handling middleware
    }
});

// Error handling middleware (Optional, can be placed in your main app file)
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
});

module.exports = router;