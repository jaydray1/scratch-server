var _ = require('lodash');
var Cat = require('./cat_model.js');

module.exports = function(app) {
    _cats = [];

    //create 
    app.post('/cat', function(req, res) {
        var newCat = new Cat(req.body);
        newCat.save(function(err) {
            if(err) {
                res.json({info: 'error during cat create', error: err});
            };
            res.json({info: 'cat created successfully'});
        })
        res.json({info: 'cat genes cloned successfully'});
    });

    app.get('/cat', function(req,res) {
        Cat.find(function(err, cats) {
            if(err) {
                res.json({info: 'error finding your cats'});
            }
            res.json({info: 'cats found successfully', data: cats});
        });
    });

    app.get('/cat/:id', function(req, res) {
        res.send(
            _.find(
                _cats,
                {
                    name: req.params.id
                }
            )
        );
    });

    app.put('/cat/:id', function(req, res) {
        var index = _.findIndex(
            _cats,
            {
                name: req.params.id
            }
        );
        _.merge(_cats[index], req.body);
        res.json({info: 'cat updated successfully'})
    });

    // app.delete('/cat/:id', function(req, res) {

    // })
}