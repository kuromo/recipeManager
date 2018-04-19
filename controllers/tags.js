var express = require('express');
var mongoose = require('mongoose')
var Tag = require('../models/tags.js')
var ApiRes = require('../models/api-response.js');
var ApiMessages = require('../models/api-messages.js');
var ApiMsg = new ApiMessages();

//var userM = require('../models/index');

module.exports.add = function(data, callback) {
	Tag.findOne({name: data.name} , function (err, dbIng) {
		if (err) {
			return callback(err, new ApiRes({ success: false, extras: { msg: ApiMsg.DB_ERROR } }));
		}
		if (dbIng) {
			return callback(err, new ApiRes({ success: false, extras: { msg: ApiMsg.USERNAME_ALREADY_EXISTS } }));
			
		} else {
			var newIng = new Tag(data)
	
			newIng.save(function(err) {
				console.log(err);
			});

			return callback(err, new ApiRes({
					success: true, extras: {
						
					}
				}));
		}
	});
};


module.exports.list = function(callback) {
	Tag.find({}, function(err, data) {
            callback(data)
        });
};

module.exports.getAC = function(term, callback) {
	Tag.find({name: { $regex: "^"+term}}, function(err, data) {

        callback(data.map(function (item) {
            return {
                label: item.name,
                value: item.id
            };
        }))
    });
};