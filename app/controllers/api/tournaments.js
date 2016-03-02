'uses strict';

var assign = require('object-assign');
var only = require('only');
var Tournament = require('../../models/tournaments');

exports.load = function(req, res, next, id) {
  Tournament.findById(id, function(err, tournament) {
    if (err) next(err);
    
    req.tournament = tournament;
    if (!req.tournament) return next(new Error('Tournament not found'));
    next();
  });
}

exports.index = function(req, res) {
  Tournament.all(function(err, tournaments) {
    res.json(tournaments.map(tournament => tournament._doc));
  });
}

exports.show = function(req, res) {
  res.json(req.tournament._doc);
}

exports.create = function(req, res) {
  var tournament = new Tournament(only(req.body, 'name sections'));
  tournament.save(function(err) {
    if (err) res.sendStatus(406);
    
    res.sendStatus(201);
  });
}

exports.update = function(req, res) {
  var tournament = req.tournament;
  
  assign(tournament, only(req.body, 'name sections'));
  tournament.save();
  
  res.sendStatus(204);
}

exports.destroy = function(req, res) {
  req.tournament.remove();
  
  res.sendStatus(204);
}