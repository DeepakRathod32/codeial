const Post = require('../../../models/post');
const Comment = require('../../../models/comment');

module.exports.index = async function(req, res){
 
    let posts = await Post.find({})
        .sort('-createdAt')
        .populate("user")
        .populate({
            path : "Comments",
            populate:{
              path:"user" 
            }
        });

    return res.json(200, {
        message: "Lists of posts",
        posts: posts
    })
}

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
                    if(post.user == req.body.id){

                        post.remove();
                
                    await Comment.deleteMany({post: req.params.id});
                    
                    
                    return res.json(200, {
                        message: "post and associated comment deleted successfully!"
                    });
    
                    }else{
                        
                        res.status(401).json({
                            message: "You cannot delete this post!"
                        });
                    }
                
            
        }catch(err){
            console.log('******', err);
            return res.json(500, {
                message: "Internal server error"
            })
        }
}