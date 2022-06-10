const nodemailer = require('../config/nodemailer');


// thhis is anothe way of exporting a method
exports.newComment = (comment) => {
    console.log("inside new comment mailer");

    nodemailer.transporter.sendMail({
        from: 'deepakrathod7132@gmail.com',
        to: comment.user.email,
        subject: "New comment Published",
        html: '<h1>Yup, your comment is now published </h1>'
    }, (err, info) => {
        if(err){
            console.log('Error in sending mail', err);
            return
        }

        console.log('Message sent', Info); 
        return;
    });
}