const express = require('express');
const router = express.Router();
const errorHandler = require('../middlewares/error/errorHandler');

router.use('/user', require('./v1/user'));

// Handling Server Exceptions
router.use(errorHandler);

module.exports = router;