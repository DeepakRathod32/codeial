const Post = require('../models/post');
const Comment = require('../models/comment');


module.exports.create = async function(req, res){
    
    try{
            console.log(req.body.content);

            let posts = await Post.create({
                content : req.body.content,
                user: req.user._id,
            });

            
            if(req.xhr){
                return res.status(200).json({
                    data: {
                        post: posts
                    },
                    message: "Post is created"
                });
            }

            req.flash('success', 'Post published!');
            return res.redirect('back');
            
        }catch(err){
            req.flash('error', 'Post published!');
            return res.redirect('back');
        }
    }


module.exports.destroy = async function(req, res){

        try{
            
            let post = await Post.findById(req.params.id);
            // console.log(post.user === req.user.id, 'koko');
    
            if(post.user == req.user.id){
                post.remove();
            
                await Comment.deleteMany({post: req.params.id});
                console.log(req.xhr);
                
                if(req.xhr){
                    return res.status(200).json({
                        data: {
                            post_id : req.params.id
                        },
                        message: 'Post deleted successfully'
                    });
                }
    
                req.flash('success', 'Post and associated comments deleted!');

                return res.redirect('back');
    
            }else{
                req.flash('error', 'You cannot delete this post!');
                res.redirect('back');
            }
            
        }catch(err){
            console.log('Error', err);
            res.redirect('back');
        }
}


