const Post = require('../models/post');

module.exports.post = function(req, res){

    return res.end('<h1> Posts got rendered.</h1>');
}

module.exports.create = function(req, res){
    Post.create({
        content : req.body.content,
        user: req.user._id
    },(err, post) => {
        if(err){
            console.log('errored while creating a post');
            return;
        }
        return res.redirect('/');
    });
}