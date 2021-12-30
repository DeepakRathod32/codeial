module.exports.profile = function(req, res){
    return res.end('<h1>User Profile</h1>');
}

module.exports.account = function(req, res){
    return res.end('<h1>User account</h1>');
}

module.exports.about = function(req, res){
    return res.end('<h1>About user</h1>');
}