var _ = require('lodash');

module.exports = function(app) {
    _cats = [];

    //create 
    app.post('/cat', function(req, res) {
        _cats.push(req.body);
        res.json({info: 'cat genes cloned successfully'});
    });

    app.get('/cat', function(req,res) {
        res.send(_cats);
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
}