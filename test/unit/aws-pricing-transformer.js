/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

var chai = require('chai')
  , fs = require('fs')
  , path = require('path')

var ec2pricing = require('../../lib/ec2pricing')

var expect = chai.expect

describe('EC2', function () {

  describe('on demand', function(){

    it('should retrieve a list of prices given a zone', function(done){

      fs.readFile(path.join(__dirname, '../fixture/pricing-on-demand-instances.json'), {encoding: 'utf8'}, function(err, data){

        expect(err).to.not.exist;

        var jsonData = JSON.parse(data);

        console.log(jsonData.vers)
        console.log(jsonData.config.regions.length)

        ec2pricing.list({region: 'us-east', type: 'stdODI', os: 'linux'}, jsonData, function(err, data){
          expect(err).to.not.exist
          expect(data).to.exist
          console.log(data)
          done()
        })
      })
    })
  })


})