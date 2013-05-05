/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var chai = require('chai')
  , helper = require('../fixture/helper')

var AwsPricingApi = require('../../lib/aws-pricing-api')

var expect = chai.expect

describe('EC2', function () {

  var awsPricingApi = new AwsPricingApi()

  describe('on demand', function () {

    before(function (done) {
      helper.loadFixture('pricing-on-demand-instances.json', function(err, data){
        // mock pricing provider based on fixture
        awsPricingApi._awsPricingProvider = {
          requestOnDemandPricing: function (callback) {
            callback(err, JSON.parse(data))
          }
        }
        done()
      })

    })

    it('should retrieve a list of prices given a zone', function (done) {
      awsPricingApi.listOnDemandPricing({region: 'us-east', type: 'stdODI', os: 'linux'}, function (err, data) {
        expect(err).to.not.exist
        expect(data).to.exist
        done()
      })
    })
  })

})