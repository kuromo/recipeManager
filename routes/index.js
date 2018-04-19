var express = require('express');
var mongoose = require('mongoose')
//var indexM = require('../models/index');

module.exports.controller = function(app) {

  app.get('/', function(req, res, next) {
    res.render('index', { 
      hTitle: 'recipeManager',
      toggleTxt: "Toggle navigation",
      nav1: "Import",
      nav2: "page2",
      links: [{link: "/register", desc: "register a user"},
        {link: "/login", desc: "login"},
        {link: "/logout", desc: "logout"},
        {link: "/profile", desc: "user profile"},
        {link: "/forgot", desc: "forgot password"},
        {link: "/addIngredient", desc: "add a new ingredient"},
        {link: "/listIngredient", desc: "list all ingredients"},
        {link: "/addTag", desc: "add a new tag"},
        {link: "/listTag", desc: "list all tags"}

      ]

    });
  });

}


/*var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { 
    hTitle: 'aniSorter',
    toggleTxt: "Toggle navigation",
    nav1: "Import",
    nav2: "page2"

  });
});

module.exports = router;
*/
/*
<meta charset="utf-8">
    <title>aniSorter</title>
    <!-- attach CSS -->
    <link href="ext.css" rel="stylesheet" />
    <link href="anisorter.css" rel="stylesheet">
    <!-- attach JS -->
    <script src="ext.js"></script>
    <script src="anisorter.js"></script>
    */

