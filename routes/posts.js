const express = require('express');
const router = express.Router();
const passport = require('passport');

const postControllers = require('../controllers/post_Controller')

router.get('/post', postControllers.post);

router.post('/create', passport.checkAuthentication, postControllers.create);

module.exports = router;