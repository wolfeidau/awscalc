/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var awsPricing = require('aws-pricing')

var AwsPricingApi = function () {}

// local instance
AwsPricingApi.prototype._awsPricingProvider = awsPricing

/**
 * List which filters the results available in the aws json to a subset based on the options provided.
 *
 * @param options
 * @param callback
 */
AwsPricingApi.prototype.listOnDemandPricing = function (options, callback) {

  this._awsPricingProvider.requestOnDemandPricing(function (err, data) {

    if (err) {
      callback(err)
    }

    var regionData = data.config.regions.filter(function (entry) {
      if (entry.region === options.region) {
        return entry
      }
    })

    if (regionData.length === 0) {
      callback(new Error('Region ' + options.region + ' not found.'))
    }

    var typeData = regionData[0].instanceTypes.filter(function (entry) {
      if (entry.type === options.type) {
        return entry
      }

    })

    if (typeData.length === 0) {
      callback(new Error('Type ' + options.type + ' not found.'))
    }

    callback(null, typeData[0])

  })

}

module.exports = AwsPricingApi