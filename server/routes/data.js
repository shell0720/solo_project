var express = require('express');
var router = express.Router();
var path = require('path');
var Diary = require('../models/diary');
var Vocabulary = require('../models/vocabulary');


router.get("/voc", function(req, res){
  Vocabulary.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/voc", function(req,res){
  var addedVoc = new Vocabulary({
    "translation": req.body.translation,
    "query": req.body.query
  });
  addedVoc.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete('/voc/:id', function(req,res){
  console.log(req.params);
  Vocabulary.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

router.get("/word", function(req, res){
  Diary.find({}, function(err, data){
    if (err){
      console.log(err);
    }
    res.send(data);
  });
});

router.post("/word", function(req,res){
  var addedDiary = new Diary({
    "content": req.body.content,
  });
  addedDiary.save(function(err, data){
    if(err){
      console.log(err);
    }
    res.send(data);
  });
});

router.delete("/word/:id", function(req,res){
  console.log(req.params);
  Diary.findByIdAndRemove(req.params.id, function(err, data){
    if (err) console.log(err);
    res.send(data);

  });
});

router.get("/*", function(req,res){
  var file = req.params[0] || "/views/users.html";
  res.sendFile(path.join(__dirname, "../public", file ));
});

module.exports = router;
