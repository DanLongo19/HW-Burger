var orm = require("../config/orm.js");
var express = require("express");
var router = express.Router();

var burger = {
    all: function(cb) {
    orm.all("burgers", function(res){
        cb(res);
    });
    },
    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, cb);
},
    add: function(cols, vals, cb){
        orm.add('burgers', cols, vals, function(res){
            cb(res);
        });
}
}
router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

module.exports = burger; 
