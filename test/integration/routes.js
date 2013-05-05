/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */
var chai = require('chai')
  , Hapi = require('hapi')

var routes = require('../../lib/routes')

var expect = chai.expect

describe('Routes', function () {

  var server

  before(function () {
    // load with just the views fragment of the configuration
    server = new Hapi.Server()
    server.views({
      engines: {
        jade: 'jade'
      },
      path: './views',
      isCached: false // disabled for development
    })
    routes.configureRoutes(server)

  })

  describe('content', function () {

    it('should respond to / with 200 status code', function (done) {
      server.inject({ method: 'GET', url: '/' }, function (res) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
    it('should respond to /about with 200 status code', function (done) {
      server.inject({ method: 'GET', url: '/about' }, function (res) {
        expect(res.statusCode).to.equal(200)
        done()
      })
    })
  })
})