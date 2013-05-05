/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */
var Hapi = require('hapi')
  , packageInfo = require('../package.json')

exports.configureRoutes = function (server) {

    // Serve the public folder with listing enabled
    server.addRoute({
        method: 'GET',
        path: '/{path*}',
        handler: {
            directory: {
                path: './public/'
            }
        }
    })

  var rootHandler = function (request) {

    request.reply.view('index', {
      title: 'awscalc', message: 'Welcome to awscalc.', hapiVersion: Hapi.utils.version(), appVersion: packageInfo.version
    })
  }

  var aboutHandler = function (request) {

    request.reply.view('about', {
      title: 'awscalc', message: 'About awscalc.', hapiVersion: Hapi.utils.version(), appVersion: packageInfo.version
    })
  }

  server.addRoute({ method: 'GET', path: '/', handler: rootHandler })
  server.addRoute({ method: 'GET', path: '/about', handler: aboutHandler })

  // API methods

  server.addRoute({
    method: 'GET', path: '/api/name', handler: function(request){
      request.reply({name: 'My Name'})
    }
  })

}
