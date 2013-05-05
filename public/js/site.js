/*
 * awscalc
 * https://github.com/markw/awscalc
 *
 * Copyright (c) 2013 Mark Wolfe
 * Licensed under the MIT license.
 */

function AppCtrl($scope, $http) {

  $http.jsonp('http://aws.amazon.com/ec2/pricing/pricing-on-demand-instances.json').
    success(function(data, status, headers, config) {
      $scope.project = JSON.parse(data);
    }).
    error(function(data, status, headers, config) {
      $scope.name = 'Error!'
    })
}

!function ($) {

  $('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
  })

}(window.jQuery)

