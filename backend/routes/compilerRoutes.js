const express = require("express");
const compilerController = require('../controllers/compilerController');

const router = express.Router();

router.post('/execute',compilerController.executeCode);

module.exports= router;