// routes/bfhlRoutes.js

const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

// POST method for processing data
router.post('/bfhl', bfhlController.processData);

// GET method for returning operation code
router.get('/bfhl', bfhlController.getOperationCode);

module.exports = router;