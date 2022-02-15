const User = require('../models/user');

module.exports.profile = function(req, res){
    User.findById(req.params.id, function(err, users){
        return res.render('user_profile',{
            title : 'user_profile',
            profile_user : users
        });
    });
    
}

module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id, req.body, function(err, users){
            return res.redirect('back');
        });
    }else{
        return res.status(401).send('unauthorised');
    }
    
}

module.exports.signin = function(req, res){
        
        
        return res.render('signin',{
            title : 'Signin Page'
        });       
}

module.exports.signup = function(req, res){
    if(req.isAuthenticated){
        return res.redirect('/users/profile')
    }

    return res.render('signup',{
        title : 'Signup Page'
    });
}

// get the sign up data
module.exports.create = function(req, res){
    //console.log(req.body); 
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
    //console.log(req.body);
    req.flash('success', 'logged in successfully');
    
    return res.redirect('/');   
}

module.exports.destroySession = function(req, res){
    req.logout();
    req.flash('success', 'You have logged out');
    return res.redirect('/');
}