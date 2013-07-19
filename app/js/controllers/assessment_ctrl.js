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
  $scope.topicScore   = 0;

  $http.get('/data/' + $routeParams.assessmentId + '.json').
    success(function(data) {
      $scope.assessment   = data;

      $scope.mainCategory  = $scope.assessment.categories[0];
      $scope.categoryTotal = $scope.arrayLength($scope.assessment.categories);
      $scope.categoryN     = 1;

      $scope.mainTopic    = $scope.mainCategory.topics[0];
      $scope.topicsTotal  = $scope.arrayLength($scope.mainCategory.topics);
      $scope.topicN       = 1;
  });

  $scope.topicRanked = function(rankValue) {
    $scope.topicScore = rankValue;

    if ($scope.topicN === $scope.topicsTotal) {
      $scope.categoryN++;
      $scope.mainCategory = $scope.assessment.categories[$scope.categoryN - 1];
      $scope.mainTopic    = $scope.mainCategory.topics[0];
      $scope.topicsTotal  = $scope.arrayLength($scope.mainCategory.topics);
      $scope.topicN       = 1;

    } else {
      $scope.topicN++;
      $scope.mainTopic = $scope.mainCategory.topics[$scope.topicN - 1];
    }
  };

  $scope.arrayLength = function(array) {
    var size = 0, key;
    for (key in array) {
      if (array.hasOwnProperty(key)) size++;
    }
    return size;
  };
}];