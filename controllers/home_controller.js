module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id', 90);
    return res.render('home', {
        title : 'Home'
    });
}



// module.exports.actionName = function(req, res){}