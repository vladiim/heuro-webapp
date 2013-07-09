'use strict';

describe('AssessmentShowCtrl', function() {
  var $httpBackend, $rootScope, createController;

  var mainTopicData = {
    "name": "topic 1",
    "ranking": {
      "0": "Don't know",
      "1": "Bad nav",
      "2": "Something else",
      "3": "A different answer",
      "4": "Lolz. Smart"
    }
  }

  var mainCategoryData = {
    "name": "category 1",
    "topics": [ mainTopicData ]
  }

  var assessmentData = {
    "name": "insights",
    "categories": [ mainCategoryData ]
  }

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope   = $injector.get('$rootScope');

    $httpBackend.when('GET', '/data/insights.json').respond(assessmentData);

    var $controller  = $injector.get('$controller');
    var $routeParams = $injector.get('$routeParams');

    $routeParams.assessmentId = 'insights';

    createController = function() {
      return $controller('AssessmentShowCtrl',
                         { '$scope':       $rootScope,
                           '$routeParams': $routeParams });
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('calls the correct url', function() {
    $httpBackend.expectGET('/data/insights.json');
    createController();
    $httpBackend.flush();
  });

  it('creates an assessment model', function() {
    expect($rootScope.assessment).toBeUndefined();
    createController();
    $httpBackend.flush();
    expect($rootScope.assessment).toEqual(assessmentData);
  });

  it('sets up the 1st category as the mainCategory', function() {
    expect($rootScope.mainCategory).toBeUndefined();
    createController();
    $httpBackend.flush();
    expect($rootScope.mainCategory).toEqual(mainCategoryData);
  });

  it('sets up the 1st topic as the mainTopic', function() {
    expect($rootScope.mainTopic).toBeUndefined();
    createController();
    $httpBackend.flush();
    expect($rootScope.mainTopic).toEqual(mainTopicData)
  });
});