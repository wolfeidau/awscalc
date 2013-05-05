/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

exports.list = function(options, data, callback){


  var regionData = data.config.regions.filter(function(entry){
    console.log('entry.region', entry.region)
    if (entry.region === options.region) {
      return entry
    }
  })
  console.log('entry.region', options.region)

  if(regionData.length === 0) {
    callback(new Error('Region ' + options.region + ' not found.'))
  }

  var typeData = regionData[0].instanceTypes.filter(function(entry){
    console.log('entry.type', entry.type)
    if(entry.type === options.type){
      return entry
    }

  })

  if(typeData.length === 0) {
    callback(new Error('Type ' + options.type + ' not found.'))
  }


  callback(null, typeData[0])


}