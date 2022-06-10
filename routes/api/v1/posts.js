const express = require('express');
const passport = require('passport');

const router = express.Router();
const postsApi = require("../../../controllers/api/v1/posts_api");

router.get('/', postsApi.index);
router.delete('/:id', passport.authenticate('jwt', {session: false}), postsApi.destroy);

module.exports = router;



//codeial-socal

// client-ID : 515325436482-t7fhjcemk8o9ui6sqp8lknhqgbcrhhac.apps.googleusercontent.com

// client-secret : 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
