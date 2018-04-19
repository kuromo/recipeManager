var nodemailer = require('nodemailer');

var Sender = 'test@aniNode.com'
var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: 'kuromo.testing@gmail.com',
        clientId: '553270700481-7tenp8pgt6ktb4s1nnvba5lsr2i32mh8.apps.googleusercontent.com',
        clientSecret: 'FRCrdtLSSe_Gtj1idzyGd_Mt',
        refreshToken: '1/uvlj3d3SEsuFMgLxjmDM-diRzMrzCimX99NYpnczGAQ',
        accessToken: 'ya29.GlvOBCJhUb8c0u5qPef5bkvv2RI2iP7klqdBJaU6jD_obiHHlyKBhmE0qPGvxBtjSJy1QgApKn_oWhcqXp0j3kSBjXKrNsNtWtYm02fHF61U25dDvmVT623OEkX0' 
    }
});

module.exports.sendMail = function (mailOptions, callback) {
	mailOptions.from = Sender

	transporter.sendMail(mailOptions, function(err) {
		callback(err)
	});
}