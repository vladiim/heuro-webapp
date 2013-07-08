'use strict';

describe('AssessmentListCtrl', function() {
  var scope, ctrl, $httpBackend;

  var assessmentData = [{ "completion": 0, "id": "insights", "name": "insights" }];

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/data/assessments.json').respond(assessmentData);

    scope = $rootScope.$new();
    ctrl  = $controller(AssessmentListCtrl, { $scope: scope });
  }));

  it('creates an "assessments" model with data from xhr req', function() {
    expect(scope.assessments).toBeUndefined();
    $httpBackend.flush();

    expect(scope.assessments).toEqual(assessmentData);
  });
});