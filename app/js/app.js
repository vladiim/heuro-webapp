'use strict';

var heuro = angular.module('heuro', []);

/* Routes */

heuro.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/assessments/:assessmentId', {
  	  templateUrl: '/partials/assessments/show.html',
  	  controller: AssessmentShowCtrl}).
    otherwise({ redirectTo: '/' });
}]);

/* Remove hashbang url mode */

heuro.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);