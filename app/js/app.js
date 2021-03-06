'use strict';

var heuro = angular.module('heuro', ['heuroFilters']);

/* Routes */

heuro.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/assessments/:assessmentId', {
  	  templateUrl: '/templates/partials/assessments/show.html',
  	  controller: AssessmentShowCtrl})
}]);

/* Remove hashbang url mode */

heuro.config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);