'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var imageRouter = express.Router();

imageRouter.use(bodyParser.json());

imageRouter.route('/:name')
    .get(function (req, res, next) {
        var options = {
            root: __dirname + '/../images/',
            dotfiles: 'deny',
            headers: {
                'x-sent': true
            }
        };
        var fileName = req.params.name;
        res.sendFile(fileName, options, function (err) {
            if (err) console.log("Error: ", err);
        });
    });

module.exports = imageRouter;