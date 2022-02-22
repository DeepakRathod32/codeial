const Comments = require('../models/comment');
const Post = require('../models/post');

module.exports.create = (req, res) => {
    Post.findById(req.body.post, function(err, post){
        if(post){
            Comments.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            },(err, comment) => {
                if(err){
                    console.log('errored while reading comment');
                }
        
                post.Comments.push(comment);
                post.save();
                // console.log(req.body);
                return res.redirect('/');
            }
            );
        }
    });

}

module.exports.destroy = function(req, res){
 Comments.findById(req.params.id, function(err, comment){
     if(comment.user == req.user.id){

        let postId = comment.post;

        comment.remove();

        Post.findByIdAndUpdate(postId, { $pull: {comments: req.params.id}}, function(err,post) {   
            return res.redirect('/');
        })
     }else{
         return res.redirect('/');
     }
 });   
}