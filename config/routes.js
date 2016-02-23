'use strict';

var users = require('../app/controllers/users');

module.exports = function(app) {
  
  app.use(users.loadCurrentUser);
  
  // User Routes
  app.param('userId', users.load);
  
  app.get('/users', users.index);
  app.get('/users/:userId', users.show);
  app.get('/users/:userId/edit', users.edit);
  app.post('/users/:userId', users.update);
  
  // Article Routes
};