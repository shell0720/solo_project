var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get("/", function (req, res, next){
  res.json(req.isAuthenticated());
});

router.get("/name", function(req, res, next){
  User.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});


module.exports = router;
