'use strict';

describe('AssessmentShowCtrl', function() {
  var $httpBackend, $rootScope, createController;

  var mainTopicData    = { "name": "topic 1", "ranking": { "0": "Don't know" } };
  var nextTopicData    = { "name": "next topic 2", "ranking": { "0": "Don't know" } };
  var mainCategoryData = { "name": "category 1", "topics": [ mainTopicData, nextTopicData ] };
  var assessmentData   = { "name": "insights", "categories": [ mainCategoryData ] };

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

  it('sets up the category and topic meta details', function() {
    createController();
    $httpBackend.flush();
    expect($rootScope.categoryTotal).toEqual(1);
    expect($rootScope.categoryN).toEqual(1);
    expect($rootScope.topicsTotal).toEqual(2);
    expect($rootScope.topicN).toEqual(1);
  });

  describe('topicRanked()', function() {
    var newAssessmentData, catTwoTopicOne, secondCategoryData;

    beforeEach(function() {
      catTwoTopicOne     = {};
      secondCategoryData = { "name": "category 2", "topics": [ catTwoTopicOne, mainTopicData, nextTopicData ] };
      newAssessmentData  = { "name": "insights", "categories": [ mainCategoryData, secondCategoryData ] };
      createController();
      $httpBackend.flush();
      $rootScope.assessment = newAssessmentData;
      $rootScope.topicN = 2;
      $rootScope.topicRanked(2);
    });

    it('sets the topic score', function() {
      expect($rootScope.topicScore).toEqual(2);
    });

    it('changes to the next category', function() {
      expect($rootScope.mainCategory).toEqual(secondCategoryData);
    });

    it('moves the main topic', function() {
      expect($rootScope.mainTopic).toEqual(catTwoTopicOne);
    });

    describe('call the function again', function() {
      beforeEach(function() {
        $rootScope.topicRanked(3);
        $rootScope.topicRanked(3);
      });

      it('sets the mainTopic to the next category topic', function() {
        expect($rootScope.mainTopic).toEqual(nextTopicData);
      });
    });
  });
});