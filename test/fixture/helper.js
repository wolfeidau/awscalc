/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */
var fs = require('fs')
  , path = require('path')

exports.loadFixture = function (fileName, callback) {

  fs.readFile(path.join(__dirname, fileName), {encoding: 'utf8'}, function (err, data) {
    callback(err, data)
  })

}