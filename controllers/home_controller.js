const Post = require("../models/post");

module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 90);

    // Post.find({}, (err, post) =>{
    //     if(err){ console.log('errored while finding post.'); 
    //         return;
    //     }
    //     return res.render('home', {
    //         title : 'Codeial | Home',
    //         posts : post
    //     });
    // });

    //populate the user of each post
    Post.find({}).populate('user').exec(function(err, posts){
        if(err){ console.log('errored while finding post.'); 
            return;
        }
        console.log(posts);
        return res.render('home', {
            title : 'Codeial | Home',
            posts : posts
        });
    });
}



// module.exports.actionName = function(req, res){}