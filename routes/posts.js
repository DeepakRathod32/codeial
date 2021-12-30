const express = require('express');
const router = express.Router();

const postControllers = require('../controllers/post_Controller')

router.get('/post', postControllers.post);

module.exports = router;