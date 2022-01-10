const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user_profile',{
        title : 'user_profile'
    });
}

module.exports.signin = function(req, res){
    return res.render('signin',{
        title : 'Signin Page'
    });
}

module.exports.signup = function(req, res){
    return res.render('signup',{
        title : 'Signup Page'
    });
}

// get the sign up data
module.exports.create = function(req, res){
    // console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email : req.body.email}, (err, user) => {
        if(err){ console.log('Error finding user in sign up'); return}

        if(!user){
            User.create(req.body, (err, user) => {
                if(err){ console.log('Error finding user in sign up'); return}

                return res.redirect('/users/signin');
            });
        }else{
            return res.redirect('back');
        }
    });    
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    console.log(req.body);
}