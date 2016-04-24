'use strict'

process.env.NODE_ENV = 'test'

var chai = require('chai')
var server = require('../../app')
var should = chai.should()

var factory = require('../factory')

describe('Users', function() {

  before(function(done) {
    factory.cleanup()
    done()
  })

  beforeEach(function(done) {
    done()
  })

  afterEach(function(done) {
    factory.cleanup()
    done()
  })

  after(function(done) {
    factory.cleanup()
    done()
  })

  describe('#addNotification()', function() {
    it('should add 3 notifications for user', function(done) {
    	factory.create('user_with_3_notifications', function(err, user) {
    		user.should.have.property('notifications')
    		user.notifications.should.be.a('array')
    		user.notifications.should.have.length(3)
    		done()
    	})
    })
  })

})
