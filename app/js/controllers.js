'use strict';

/* AssessmentListCtrl */

var AssessmentListCtrl = ['$scope', '$http', function($scope, $http) {
	$http.get('/data/assessments.json').success(function(data) {
		$scope.assessments = data;
	});
}];

/* AssessmentShowCtrl */

var AssessmentShowCtrl = ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $scope.assessmentId = $routeParams.assessmentId;

  $http.get('/data/' + $routeParams.assessmentId + '.json').
    success(function(data) {
      $scope.assessment = data;
    });
}];