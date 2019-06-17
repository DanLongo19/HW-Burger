var orm = require("./config/orm.js");

var burger = {
    all: function(cb){
    orm.all('burgers', function(res){
        cb(res);
    })
    },
    update: function(id, cb){
        orm.update('burgers', id, cb);
},
    add: function(name, cb){
        orm.add('burgers', name, cb);
}
}
router.post('/burgers/create', function(req,res){
    burger.create(req.body.burger_name, function(result){
        res.redirect('/');
    })
})

module.exports = burger; 
