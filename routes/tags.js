var express = require('express');
var mongoose = require('mongoose')
var TC = require('../controllers/tags.js');
//var userM = require('../models/index');

module.exports.controller = function(app) {

	app.get('/addTag', function(req, res, next) {
		res.render('tag/add');
	});

	app.post('/addTag', function(req, res, next) {
		TC.add(req.body, function(err, msg){
			if(err){return console.log(err)}
			
			if(msg.success){
				req.session.usr = msg.extras.userProfileModel
				req.flash('success', 'Successfully added Tag.');
				res.send({ redirect: '/listTag' })
			}else{
				//TODO tell user
				console.log(msg)
			}
		})

		/*req.body.name
        req.body.description
        req.body.origin
        req.body.tags*/
			
	});

	app.get('/listTag', function(req, res, next) {
		TC.list(function(list){
			res.render('tag/list',{ingredients: list});
		})
	});

	app.post('/getTagAC', function(req, res, next) {
		TC.getAC(req.body.term ,function(data){
			res.json(data);
		})
	});

}





