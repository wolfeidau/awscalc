/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */
var Hapi = require('hapi')

// Create Hapi server
var server = Hapi.createServer('localhost', 8000)

server.views({
  engines: {
    jade: 'jade'
  },
  path: './views',
  isCached: false // disabled for development
})

require('./lib/routes').configureRoutes(server)

var onPostHandler = function (request, next) {
  console.log(request._timestamp, request.path, request._response._code)
  next()
}

server.ext('onPostHandler', onPostHandler)

var options = {
  subscribers: {
    console: ['ops', 'request', 'error']
  }
}

var pack = new Hapi.Pack()

pack.allow({ events: true }).require('good', options, function (err) {

  if (err) {
    console.error('loading good failed', err)
  }

})

server.start()