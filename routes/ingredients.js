var express = require('express');
var mongoose = require('mongoose')
var IC = require('../controllers/ingredients.js');
//var userM = require('../models/index');

module.exports.controller = function(app) {

	app.get('/addIngredient', function(req, res, next) {
		res.render('ingredient/add');
	});

	app.post('/addIngredient', function(req, res, next) {
		IC.add(req.body, function(err, msg){
			if(err){return console.log(err)}
			
			if(msg.success){
				req.session.usr = msg.extras.userProfileModel
				req.flash('success', 'Successfully added ingredient.');
				res.send({ redirect: '/listIngredient' })
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

	app.get('/listIngredient', function(req, res, next) {
		IC.list(function(list){
			res.render('ingredient/list',{ingredients: list});
		})
	});

}





